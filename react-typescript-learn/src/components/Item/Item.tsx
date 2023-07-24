import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = () => {
  return (
    <Link to={''} style={{textDecoration: 'none', minHeight: '257px'}} className="product-card">
      <img src="https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps157s3/_TC_9181x500x500x4.webp" alt="" />
      <h6 className='product-name'>Áo thun có cổ ngắn tay Aristino APS157S</h6>
      <h2 className='product-price'>595.000đ  </h2>
    </Link>
  )
}

export default Item