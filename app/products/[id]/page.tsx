import { fetchProductById } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import ProductReviews from '@/app/ui/products/reviews/reviews';

export const metadata: Metadata = {
  title: 'Product Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id);
  return (
    <div className="flex w-full flex-col items-center">
      <div className='max-w-screen-md '>
      <section className='flex flex-col md:flex-row py-4'>
        <Image
          src={product.image_url}
          alt={`Picture of ${product.name}`}
          className="mr-4"
          width={512}
          height={512}
        />
        <div>
          <h2 className={`${lusitana.className} text-xl md:text-2xl`}>
            {product.name}
          </h2>
          <h3 className={`${lusitana.className} text-l mb-2`}>
            ${product.price}
          </h3>
          <p>
            <strong>Seller: </strong>
            <Link href={`../sellers/${product.artisan_id}`}>
              {product.fname} {product.lname}
            </Link>
          </p>
          <p>
            <strong>Description: </strong>
            {product.description}
          </p>
          <p>
            <strong>Category: </strong>
            {product.category}
          </p>
        </div>
      </section>
        <ProductReviews id={params.id} />
        </div>
    </div>
  );
}
