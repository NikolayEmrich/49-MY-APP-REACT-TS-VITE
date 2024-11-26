import React from 'react'
import { useCart } from '../context/cartContext'
import MyButton from '../myButton/myButton';

export default function Cart() {

  // Забираете данные из контекста
  const { cart, removeFromCart, clearCart } = useCart();
  console.log(cart)

  return (
    <div className='lesson-container'>
        <h2>Shopping cart 🛒</h2>
        <ul>
          {cart.map(el => (
              <li key={el.id}>Product ID: {el.id}. Name: {el.title}. Quantity: {el.quantity}
              <MyButton text='delete product' isDanger={false} func={() => removeFromCart(el.id)}/></li>
          ))}
        </ul>
        <div>
          <MyButton text='CLEAR CART' func={clearCart}/>
        </div>
    </div>
  )
}
