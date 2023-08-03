import React from 'react'
import Carousel from '../Carousel/Carousel'
import SliderNho from '../pages/Slider_detail/SliderNho'


const Product = () => {
  return (
    <div className='container product'>
      <h1>SẢN PHẨM MỚI</h1>
      {/* <Carousel/> */}
      <SliderNho/>
    </ div>
  )
}

export default Product