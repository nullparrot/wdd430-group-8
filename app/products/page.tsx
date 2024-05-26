
import ProductList from '../../components/products/list';
import { Metadata } from 'next';

import Filter from '../../components/products/filter';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};



export default function Page() {


  return (<>
    <Filter maxPrice={'50000000'} />
    <ProductList maxPrice={'50000000'} />
  </>);
}
