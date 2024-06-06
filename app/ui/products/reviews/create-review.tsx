'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createReview } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { lusitana } from '@/app/ui/fonts';

export default function ReviewForm(id: {id: string}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createReview, initialState);
  return (
<form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <h2 className={`${lusitana.className} text-xl md:text-2xl`}>Leave a Review</h2>
        {/* User Name */}
        <input type="hidden" id='product_id' name='product_id' value={id.id}/>
        <div className="mb-4">
          <label htmlFor="user_name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="user_name"
                name="user_name"
                type="string"
                placeholder="Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
            <div id="amount-error" aria-live="polite" aria-atomic="true">
        {state.errors?.user_name &&
          state.errors.user_name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
          </div>
        </div>

        {/* Comment */}
        <div className="mb-4">
          <label htmlFor="comment" className="mb-2 block text-sm font-medium">
            Comment
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="comment"
                name="comment"
                type="string"
                placeholder="Please write your review of the product here."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="comment-error"
              />
            </div>
            <div id="comment-error" aria-live="polite" aria-atomic="true">
        {state.errors?.comment &&
          state.errors.comment.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label htmlFor="rating" className="mb-2 block text-sm font-medium">
            Rating
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="rating"
                name="rating"
                type="number"
                placeholder="5"
                step="1"
                min="1"
                max="5"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="rating-error"
              />
            </div>
            <div id="rating-error" aria-live="polite" aria-atomic="true">
        {state.errors?.rating &&
          state.errors.rating.map((error:  string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
          </div>
        </div>



      </div>
      <div className="mt-6 flex justify-end gap-4">
        {/* <Link
          href={`/products/${id}`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link> */}
        <Button type="submit">Post Review</Button>
      </div>
    </form>
  );
}
