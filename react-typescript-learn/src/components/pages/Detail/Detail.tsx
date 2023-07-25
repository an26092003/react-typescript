import HopTab from '../Slider_detail/HopTab';
import SliderDetail from '../Slider_detail/SliderDetail';
import './Detail.css';
import { Carousel } from 'react-bootstrap';
const Detail = () => {
    return <>
        <div className="container">
            <div className="data__detail flex__detail">
                <div className="img__detail">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider_img"
                                src="https://product.hstatic.net/200000492267/product/ao-polo-nam-thun-cotton__4__816dbeb505fd433fbc9e368e9034588f_master.jpg"
                                alt="Slide 1"
                            />
                            <Carousel.Caption>
                                <h3>Mẫu 1</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider_img"
                                src="https://salt.tikicdn.com/cache/w1200/ts/product/34/d2/0c/06354b88789ec4417289cde225e61a86.jpg"
                                alt="Slide 2"
                            />
                            <Carousel.Caption>
                                <h3>Mẫu 2</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider_img"
                                src="https://salt.tikicdn.com/cache/w400/ts/product/b5/e2/31/77208dd4d898462e23affe683bd7a50e.jpg"
                                alt="Slide 3"
                            />
                            <Carousel.Caption>
                                <h3>Mẫu 3</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider_img"
                                src="https://cf.shopee.vn/file/e1d1602b9dac351b454bce6c920a5746"
                                alt="Slide 4"
                            />
                            <Carousel.Caption>
                                <h3>Mẫu 4</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="der__detail">
                    <h2>Áo sơ mi trắng đẹp dành cho giới trẻ hiện nay</h2>
                    <div className="gia__detail">
                        <h4>Giá:10000đ</h4>
                        <del>Giá gốc:30000đ</del>
                    </div>

                    {/* <p>Khi bị bí ý tưởng và không biết ghi thêm cái gì vào mô tả sản phẩm, chúng ta thường có thói quen ghi những câu nhạt nhẽo như “excellent product quality”, hoặc dùng những cụm từ cảm thán như “Oh, Wow, Yeah…” để mô tả sản phẩm. Tuy nhiên, điều đó đang gây phản cảm đối với khách hàng của bạn. Việc này chỉ làm bạn trở nên kém thuyết phục hơn khi khách hàng đọc vào mô tả sản phẩm của bạn.</p> */}
                    <div className="input__detail">
                        <button className='button'>-</button>
                        <input type="number" name="" id="" min='0' />
                        <button className='button'>+</button>
                    </div>
                    <div className="size__detail">
                        <input type="submit" value="39" className='color-change-btn' />
                        <input type="submit" value="40" className='color-change-btn' />
                        <input type="submit" value="41" className='color-change-btn' />
                        <input type="submit" value="42" className='color-change-btn' />
                    </div>
                    <div className="hang__detail">
                        <input type="submit" value="Thêm giỏ hàng" className='mua__detail' />
                        <input type="submit" value="Mua hàng" className='mua__detail' />
                    </div>
                </div>
            </div>
            <div className="descr__detail">
                <h3>Thông tin chi tiết sản phẩm</h3>
                <p className="title">FORM DÁNG: Regular Fit</p>
                <p className="title">THIẾT KẾ:</p>
                <p>
                    - Áo Polo phom dáng Regular fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc
                </p>
                <p>
                    - Thiết kế basic với cổ dệt jacquard phối màu nổi bật, chỉn chu, tay áo bo rib trẻ trung, tạo nên dấu ấn thanh lịch, thời thượng cho quý ông.
                </p>
                <p className="title">CHẤT LIỆU:</p>
                <p>
                    - 95% Cotton Organic thoáng khí, thấm mồ hôi vượt trội và thân thiện với làn da
                </p>
                <p>
                    - 5% Spandex đem đến độ co giãn nhẹ
                </p>
                <p>MÀU SẮC: Xanh tím than 24; Be 78; Trắng 6; Đỏ booc đô 6</p>
                <p>SIZE: S/M/L/XL/XXL</p>
            </div>
            <h2>Các sản phẩm tương tự</h2>
            <SliderDetail></SliderDetail>
            <div className="mota__detail ">
                <HopTab></HopTab>
            </div>
        </div>
    </>
}

export default Detail