
import { Metadata } from 'next';
import './SellerPage.css';
import Sellers from '../../components/sellers';


export const metadata: Metadata = {
  title: 'Handcrafted Haven',
};



export default function Page() {
  return <Sellers />;
}
