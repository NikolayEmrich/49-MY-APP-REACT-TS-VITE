import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/type";
import styles from "./products.module.css";
import { Link } from "react-router-dom";
import MyButton from "../myButton/myButton";
import ShopProduct from "../shopProduct/ShopProduct";
import Cart from "../cart/Cart";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // * асинхронный запрос на сервер
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    // console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>

      {/* Импорт корзины прямо сверху списка продуктов */}
      <Cart/>

      <div className={styles.shopContainer}>
        {products.map((el) => (
          <ShopProduct key={el.id} id={el.id} price={el.price} title={el.title} image={el.image}/>
        ))}
      </div>
    </div>
  );
}
