import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './store.module.css'
import StoreCard from "../storeCard/StoreCard";


export const Store: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [limit]);
  const formik = useFormik({
    initialValues: {
      limit: 5,
    },
    validationSchema: Yup.object({
      limit: Yup.number()
        .min(1, "Минимально - 1 товар")
        .max(30, "Максимально - 30 товаров")
        .required("Данное поле обязательно"),
    }),
    onSubmit: (values) => {
      setLimit(values.limit);
    },
  });
  return (
    <div className={styles.store}>
      <h1> Поиск</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <label>
          Количество просматриваемых товаров:
          <input
            type="number"
            name="limit"
            value={formik.values.limit}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.limit && formik.touched.limit ? styles.errorInput : ""}
          />
        </label>
        {formik.errors.limit && formik.touched.limit && (
          <div className={styles.error}>{formik.errors.limit}</div>
        )}
        <button type="submit">Применить</button>
      </form>
      <div className={styles.grid}>
        {products.map((product: any) => (
          <StoreCard key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Store;