import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderDetail.css'
const SliderNho = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

    };
    return (
        <div className="Slider__nho">
            <Slider  {...settings}>
                <div className="box__slider--nho">
                    <img src="https://static.sonkimfashion.vn/static/file/image/7ef25e133950433eb1d610c1165796a0/ao-polo-jockey-nam-1225-xanh-den-j1225-p1s200(1)_grande.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>
                </div>
                <div className="box__slider--nho">
                    <img src="https://cf.shopee.vn/file/23c74320dbfcd41e7a76b59ac1ff067c" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://salt.tikicdn.com/cache/w1200/ts/product/5a/67/76/ca6102a065b11962b148f963e2080ef7.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://static.sonkimfashion.vn/static/file/image/8dd69de441ee47d38f7f6c6dae02bbe3/ao-polo-jockey-nam-1225-xam-j1225-p1s200(1)_master.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>
                <div className="box__slider--nho">
                    <img src="https://salt.tikicdn.com/cache/w1200/ts/product/f7/fd/c6/e732d11546b5282972c304ce400480b5.jpg" alt="" />
                    <div className="content"><h3>ÁO SƠ MI</h3></div>

                </div>

            </Slider>

        </div>
    )
}

export default SliderNho