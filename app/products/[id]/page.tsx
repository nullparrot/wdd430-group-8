import { Metadata } from 'next';
import ProductDetails from '../../../components/products/details';

export const metadata: Metadata = {
  title: 'Product page',
};

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetails id={params.id} />;
}
