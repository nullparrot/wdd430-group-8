'use client';

import Link from 'next/link';

function Filter({ maxPrice }: { maxPrice: string }) {
  const is5000 = maxPrice === '5000';
  const is30000 = maxPrice === '30000';
  const is70000 = maxPrice === '70000';
  const isAny = !is5000 && !is30000 && !is70000;
  return (
    <>
      <div className=' flex '>
        <div className=" flex flex-col">
          <label>
            <Link href="/products/filter/5000" className=" me-3 flex flex-col">
              under $5000
              <input
                type="checkbox"
                name="priceFilter"
                value="5000"
                defaultChecked={is5000}
                className="mx-1"
              />
            </Link>
          </label>
          <label>
            <Link href="/products/filter/30000" className=" me-3 flex flex-col">
              under $30000
              <input
                type="checkbox"
                name="priceFilter"
                value="30000"
                defaultChecked={is30000}
                className="mx-1"
              />
            </Link>
          </label>
          <label>
            <Link href="/products/filter/70000" className=" me-3 flex flex-col">
              under $70000
              <input
                type="checkbox"
                name="priceFilter"
                value="70000"
                defaultChecked={is70000}
                className="mx-1"
              />
            </Link>
          </label>
          <label>
            <Link href="/products/" className=" me-3 flex flex-col">
              See All
              <input
                type="checkbox"
                name="priceFilter"
                value="all"
                defaultChecked={isAny}
                className="mx-1"
              />
            </Link>
          </label>
        </div>
        <h1 className='text-4xl  '  >All Products</h1>
      </div>
    </>
  );
}

export default Filter;
