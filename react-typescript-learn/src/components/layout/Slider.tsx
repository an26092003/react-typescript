import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://phunugioi.com/wp-content/uploads/2021/11/Background-bau-troi-background-sky-cho-may-tinh.jpg"
                    alt="Slide 1"
                />
                <Carousel.Caption>
                    <h3>Slide 1</h3>
                    <p>Description of slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-bau-troi-hoang-hon-danh-cho-may-tinh.jpg"
                    alt="Slide 2"
                />
                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>Description of slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://inkythuatso.com/uploads/thumbnails/800/2023/02/5-hinh-anh-bau-troi-trong-xanh-dep-binh-yen-va-tho-mong-inkythuatso-06-16-55-26.jpg"
                    alt="Slide 3"
                />
                <Carousel.Caption>
                    <h3>Slide 3</h3>
                    <p>Description of slide 3</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://kynguyenlamdep.com/wp-content/uploads/2021/12/bau-troi-chieu-scaled.jpg"
                    alt="Slide 4"
                />
                <Carousel.Caption>
                    <h3>Slide 4</h3>
                    <p>Description of slide 4</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
