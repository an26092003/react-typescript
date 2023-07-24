import Category from "../../components/Category/Category"
import Product from "../../components/Product/Product"
import Slider from "../../components/layout/Slider"
import './HomePage.css'

const HomePage = () => {
  return (
      <>
          <Slider />
          <Category />
          <div className="banner">
              <img className="d-block w-100" src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/t6-2023/Banner-web-4x0x0x2.webp" alt="" />
          </div>
          <Product/>
          <div className="banner">
              <img className="d-block w-100" src="https://aristino.com/Data/upload/images/Adv/slide-home-1/he-thong-cua-hang.jpg" alt="" />
              <div className="banner-text">
              <h2 className="system">HỆ THỐNG CỬA HÀNG</h2>
              <h3 className="search">TÌM NGAY</h3>
              </div>
          </div>
      </>
  )
}

export default HomePage