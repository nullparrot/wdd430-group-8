
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
export type Review = {
  id: string;
  user_id: string;
  product_id: string;
  rating: number;
  comment: string;
  created_at: string;
  username: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  seller_id: string;
  seller_name: string;
  price: string;
  image_url: string;
};


