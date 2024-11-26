import React from 'react'
import MyButton from '../../../components/myButton/myButton'
import { Link } from 'react-router-dom'

interface IStoreCardProps {
  id: number
  title: string
  description: string
  price: number
  images: string[]
  thumbnail: string
}

export default function StoreCardHW({id, title, description, price, images, thumbnail}:IStoreCardProps) {
  return (
    <section>
      <p>Product ID: {id}</p>
      <h3>{title}</h3>
      <p>Price: {price.toFixed()} $</p>

      <div>
        <img src={thumbnail} alt="" />
      </div>
        <Link to={String(id)}>
          <MyButton text='MORE INFO' isDanger={false}/>
        </Link>
        

    </section>
  )
}
