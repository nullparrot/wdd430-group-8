import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { LatestProduct } from '@/app/lib/definitions';


export default async function LatestProducts({
    latestProducts,
}: {
    latestProducts: LatestProduct[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Products
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

         <div className="bg-white px-6">
          {latestProducts.map((product, i) => {
            return (
              <div
                key={product.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div>
                  <Link href={`../products/${product.id}`} className="flex items-center">
                  <Image
                    src={product.image_url}
                    alt={`${product.name}`}
                    className="mr-4"
                    width={128}
                    height={128}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {product.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {product.description}
                    </p>
                    <p className="text-sm font-semibold text-gray-500 sm:block">
                      {`By ${product.fname} ${product.lname}`}
                    </p>
                    <p
                      className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                    >
                      {product.price}
                    </p>
                  </div>
                  </Link>
                  
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
