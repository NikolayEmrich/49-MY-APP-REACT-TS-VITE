import React, { useEffect, useState } from "react";
import { IStoreProduct } from "../../../types/type";
import StoreCardHW from "../storeCardHW/StoreCardHW";
import styles from "./storeHW.module.css";
import { useFormik } from "formik";
import MyButton from "../../../components/myButton/myButton";

export default function StoreHW() {
  // Переменная состояния для данных сервера
  const [storeProducts, setStoreProducts] = useState<IStoreProduct[]>([]);

  // Использование Formik
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values, { resetForm }) => {
      getStoreAmountProducts(values.amount);
      resetForm();
      console.log(values);
    },
  });

  // * Aсинхронный функция с запросом данных с сервера
  const getStoreProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setStoreProducts(data.products);
    console.log(data);
  };

  // * Aсинхронный функция с запросом данных с сервера (C ЛИМИТОМ)
  const getStoreAmountProducts = async (amount: string) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${amount}`);
    const data = await res.json();
    setStoreProducts(data.products);
    console.log(data);
  };

  // Оборачиваем вызов в ЮзЭффект чтобы избежать повторных вызовов компонента
  useEffect(() => {
    getStoreProducts();
  }, []);

  return (
    <div className="lesson-container">
      <h2>Store 🏪: Разбираем самостоятельную работу</h2>

      {/* Кнопка для лимитирования продуктов магазина */}
      <form onSubmit={formik.handleSubmit} action="">
        <input
          value={formik.values.amount}
          onChange={formik.handleChange}
          name="amount"
          type="text"
        />
        <MyButton text="upload" myType="submit" />
      </form>

      <div className={styles.storeGrid}>
        {storeProducts.map((product) => (
          <StoreCardHW
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            images={product.images}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
