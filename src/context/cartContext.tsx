import React, { useContext, useState } from 'react'
import { createContext } from 'react' // from 'react' (было "from 'vm")

// Типизируем элемент корзины
interface ICartItem {
    id: number
    title: string
    price: number
    quantity: number
}

// Типизируем содержание контекста
interface ICartContextType {
    cart: ICartItem[]
    addToCart: (product: ICartItem) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

// 1. Создаем контекст
export const CartContext = createContext <ICartContextType | undefined>(undefined)

// 2. Обертка для копмонента с использованием контекста
export const CartProvider = ({children}: {children: React.ReactNode}) => {

  // Стейт для корзины
  const[cart, setCart] = useState<ICartItem[]>([])

  // Добавление товара в корзину
  const addToCart = (product: ICartItem) => {
    setCart(prevCart => {
      // Проверяем есть ли такой продукт в корзине
      const productExist = prevCart.find(item => item.id === product.id)
      if (productExist) {
        // Если такой продукт существует, то увеличиваем его кол-во на 1 и возвращаем весь новый массив с изменениями
        return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      }
      // Если продукта нет, то создаем новый массив с добавлением нового элемента к старым элементам
      return [...prevCart, { ...product, quantity: 1}];
    })
  };

  // Удаление товара из корзины
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  };

  // Очистка корзины
  const clearCart = () => {
    setCart([])
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>

      {/* За место Children придут обернутые в provider компоненты */}
      {children}

    </CartContext.Provider>
  )
};

// ! хук сделанный нашими руками для работы с контекстом корзины
// имеет внутри проверку на undefined
// использует useContext из react в который мы передаем нужный нам контекст для получения его данных в ответе для использования
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('No such context! 😵')
  }
  return context;
}
