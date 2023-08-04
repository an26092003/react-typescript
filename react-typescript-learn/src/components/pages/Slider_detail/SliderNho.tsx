import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderDetail.css'
import { useGetProductsQuery } from "../../../api/product";
import { Link } from "react-router-dom";

const SliderNho = () => {
    const {data: products, isLoading, isError} = useGetProductsQuery()


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

    };
    return (
        <div className="Slider__nho">
            <Slider  {...settings}>
                {
                    products?.map((product) => (
                <Link to={``}>
                    <div className="box__slider--nho">
                        <img src={product.image} alt="" />
                        <div className="content">
                                <h3 style={{ textTransform: 'none', fontWeight: '400' }}>{product.name}</h3>
                            <h4 style={{textAlign: 'left', fontSize: '20px'}}>{product.price} đ</h4>
                            </div>
                    </div>
                </Link>))
                }
                
                

            </Slider>

        </div>
    )
}

export default SliderNho