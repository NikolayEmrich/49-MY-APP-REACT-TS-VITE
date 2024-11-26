import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IStore } from "../../types/type";
import styles from "../storeCard/storeCard.module.css";

export default function StorePage() {
  const { id } = useParams();

  // Начальное значение для useState. Интерфейс можно заполнить автоматически в VS. 
  const [product, setProduct] = useState<IStore>({
    id: 0,
    title: "string",
    description: "string",
    rating: 0,
    category: "",
    images: [""],
    price: 0,
    brand: "",
  });

  // Вариант стрелочной функции с .then
  // const getProduct = (id: string) => {
  //   fetch(`https://dummyjson.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data)); // ---- здест не пишем "data.products"
  // };

  // ДРУГОЙ Вариант стрелочной функции БЕЗ .then
  const getProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setProduct(data) // ---- здест не пишем "data.products"
      console.log(data) 
  };



  useEffect(() => {
    getProduct(id as string); // "Типизация на лету"
  }, [id]);

  return (
    <div className="lesson-container">
      <div className={styles.storePage}>
        <div className={styles.titleText}>
          <p>Product id: {id}</p>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand} </p>
          <p>Price: {product.price} $</p>
          <div className={styles.linkPosition}>
            <Link className={styles.link} to={"../store"}>BACK TO STORE</Link>
            <p></p>
            <Link className={styles.link} to={"../lesson-16"}>BACK TO LESSON-16</Link>
          </div>
        </div>
        
        <div className={styles.storePageImage}>

          {/* Для отображения массива картинок */}
          {/* {product.images.map((image, index) => (
              <img key={index} width={200} src={image} alt="" />
          ))} */}

          {product.images ?
            <>
              <img width={475} src={product.images[0]} alt="" />
            </> : <h1>SORRY, NO SUCH PRODUCT ❌</h1>
         }

          <h3>⭐ {product.rating}</h3>

        </div>
      </div>
    </div>
  );
}
