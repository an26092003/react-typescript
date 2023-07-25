import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderDetail.css'
const SliderBig = () => {


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
        <div className="Slider__big">
            <Slider  {...settings}>
                <div className="box__slider--nho">
                    <img src="https://dongphucdongnai.vn/upload/images/SEO/phoi-do-voi-ao-polo-nu-2.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>
                </div>
                <div className="box__slider--nho">
                    <img src="https://dongphuchaianh.vn/wp-content/uploads/2022/07/mau-ao-polo-nu-hot-don-mau-co-be.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://detboco.vn/Web/Resources/Uploaded/34/images/seo/ao-thun-polo-7.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://detboco.vn/Web/Resources/Uploaded/34/images/seo/ao-thun-polo-9.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://gine.vn/wp-content/uploads/2021/09/ao-polo-nu.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>

            </Slider>

        </div>
    )
}

export default SliderBig