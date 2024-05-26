// import React from 'react';
import ProductList from '../../../../components/products/list';
import { Metadata } from 'next';
// import Link from 'next/link';
import Filter from '../../../../components/products/filter';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};



export default function Page({ params }: { params: { maxPrice: string } }) {

  return (
    <>
      <Filter maxPrice={params.maxPrice} />
      <ProductList maxPrice={params.maxPrice} />
    </>
  );
}
