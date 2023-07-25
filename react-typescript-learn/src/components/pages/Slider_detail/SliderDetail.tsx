import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderDetail.css'
const SliderDetail = () => {


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
                    <img src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/Ao-so-mi-ngan-tay-Aristinox500x500x4.webp" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>
                </div>
                <div className="box__slider--nho">
                    <img src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/ao-polo-Aristinox500x500x4.webp" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/quan-short-Aristinox500x500x4.webp" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/ao-blazer-Aristinox500x500x4.webp" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://aristino.com/Data/ResizeImage/images/banner/Quan-au-Aristino-1-x500x500x4.webp" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://aristino.com/Data/ResizeImage/images/banner/Danh-m-c-n-i-b-t--Ph-ki-n-Aristino-1x500x500x4.webp" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
            </Slider>

        </div>
    )
}

export default SliderDetail