import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://aristino.com/Data/upload/images/BANNER/N%C4%83m%202023/Banner-Aristino-golf-1920x900-Zip.jpg"
                    alt="Slide 1"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://aristino.com/Data/upload/images/BANNER/N%C4%83m%202023/T6-2023/Banner-web-aristino-desktop-1.jpg"
                    alt="Slide 2"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider_img"
                    src="https://aristino.com/Data/upload/images/BANNER/N%C4%83m%202023/Banner-Aristino-Mobile-KV_1920x900.jpg"
                    alt="Slide 3"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 h-auto slider_img"
                    src="https://aristino.com/Data/upload/images/BANNER/T03-2023/Banner-Aristino-Online-2023-Desktop.jpg"
                    alt="Slide 4"
                />
                
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
