import React from 'react'
import Carousel from '../Carousel/Carousel'
import './Category.css'
import SliderBig from '../pages/Slider_detail/SilderBig'
const Category = () => {
  return (
    <div className='container category'>
      <h1>DANH MỤC NỔI BẬT</h1>
      {/* <Carousel/> */}
      <SliderBig/>
    </ div>
  )
}

export default Category