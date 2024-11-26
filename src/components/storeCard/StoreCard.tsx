import React, { useEffect, useState } from 'react'
import styles from "./storeCard.module.css";
import { IStore } from "../../types/type";
import { Link } from 'react-router-dom';

export default function StoreCard() {
    const [products, setProducts] = useState<IStore[]>([]);

      // * асинхронный запрос на сервер
  const getStoreCard = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
    console.log(data);
  };

  useEffect(() => {
    getStoreCard();
  }, []);
    

  return (
    <div>
        {/* <h2>StoreCard:</h2> */}
        <div className={styles.storeCardContainer}>

        {products.map(product => (
          <div className={styles.shopContainerCard} key={product.id}>
            <p>Product id: {product.id}</p>
            <div className={styles.titleText}><h4>{product.title}</h4></div>
            
            <div className={styles.imgWrapper}>
              <img width={200} src={product.images[0]} alt="" />
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              
            </div>
            <div className={styles.linkPlace}>
              <Link to={String(product.id)}>View product</Link>
            </div>
            
          </div>
        ))}

      </div>
        </div>
  )
}
