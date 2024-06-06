import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { randomUUID } from 'crypto'

//   id: string;
//   product_id: string;
//   user_name: string;
//   comment: string;
//   rating: number;

const FormSchema = z.object({
  product_id: z.string({
    invalid_type_error: "Product doesn't exist.",
  }),
  user_name: z.string({
    invalid_type_error: 'Please enter a valid name.',
  }),
  comment: z.string({
    invalid_type_error: 'Please enter a comment.',
  }),
  rating: z.coerce.number({
    invalid_type_error: 'Please enter a valid rating.',
  }),
});

export type State = {
  errors?: {
    product_id?: string[];
    user_name?: string[];
    comment?: string[];
    rating?: string[];
  };
  message?: string | null;
};

export async function createReview(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    product_id: formData.get('product_id'),
    user_name: formData.get('user_name'),
    comment: formData.get('comment'),
    rating: formData.get('rating'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Review.',
    };
  }

  // Prepare data for insertion into the database
  const { product_id, user_name, comment, rating } = validatedFields.data;
  const id = crypto.randomUUID()

  // Insert data into the database
  try {
    console.log('Trying to insert')
    // console.log(id, product_id, user_name, comment, rating)
    await sql`
          INSERT INTO reviews (product_id, user_name, comment, rating)
          VALUES (${product_id}, ${user_name}, ${comment}, ${rating})
        `;
    console.log('Tried to insert')
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Review.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath(`/products/${product_id}`);
  redirect(`/products/${product_id}`);
}
