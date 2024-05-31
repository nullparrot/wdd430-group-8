import React from "react";
import Image from "next/image";
import styles from "@/app/ui/sellers.module.css";
import { artisans } from "../lib/placeholder-data";
import { products } from "../lib/placeholder-data";

const sellers = () => {
  return (
    <div className={styles.sellers}>
      {artisans.map((artisan) => (
        <section key={artisan.id} className={styles.sellerSection}>
          <div className={styles.sellerImage}>
            <Image src={`/public/sellers${artisan.id}.jpg`} 
            alt={artisan.fname} width={200} height={200} />
          </div>
          <div className={styles.SellerBio}>
            {artisan.fname} {artisan.lname}
            <p>Email: {artisan.email}</p>
          </div>
          <div className={styles.productSection}>
            {products
              .filter((product) => product.artisan_id === artisan.id)
              .map((product) => (
                <div key={product.id}>
                  <div className={styles.productImage}>
                    <Image src={product.image_url} alt={product.name} width={120} height={120} />
                  </div>
                  <div className={styles.productDetails}>
                    {product.name}
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              ))}
          </div>
          {/* Text Post Section */}
          <section className= {styles.textPost}>
            <h2>Text post title</h2>
            <p>Details here......</p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default sellers;