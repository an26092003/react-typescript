import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { Product } from '../../interface/product'
type Prop = Product
const Item = ({ product }: { product: Product }) => {
  const {name, price, image, _id} = product
  return (
    <Link to={``} style={{textDecoration: 'none', minHeight: '257px'}} className="product-card">
      <img src={image} alt="" />
      <h6 className='prNumberLiteralTypeoduct-name'>{name}</h6>
      <h2 className='product-price'>{ price}đ  </h2>
    </Link>
  )
}

export default Item