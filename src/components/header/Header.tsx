import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";

export default function Header() {
  // МЫ получаем данные из контекста, обращаясь к нему, и получаем данные через деструктуризацию!
  // Использование контекста в header для подсчета стоимости корзины
  const { cart } = useCart();

  // Добавлено из loginForm после настройки authContext.tsx
  const { user } = useAuth();

  // Функция для подсчета суммы корзины
  const calculateCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <header className={styles.header}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"/"}
      >
        Lessons
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"fetch-dog"}
      >
        Fetch dog
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"hero-gallery"}
      >
        Hero gallery
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"gender-form"}
      >
        Gender form
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"products"}
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"cart"}
      >
        Cart
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"store"}
      >
        Store
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"login"}
      >
        Login
      </NavLink>

      <span style={{ color: "yellow" }}>
        Стоимость корзины: {calculateCartPrice().toFixed(2)}$
      </span>
      {/* <span>{user.firstName}</span> */}
      <span>{user.email}</span>
    </header>
  );
}
