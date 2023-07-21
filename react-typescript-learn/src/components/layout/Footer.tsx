import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faVk, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="text-center text-black-100">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className="footer__icon">
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebookMessenger} />
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Về chúng tôi
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Câu chuyện thương hiệu</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Đôi Cánh Yêu Thương</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Tin tức</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Tuyển dụng</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                            CHÍNH SÁCH BÁN HÀNG
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Chính sách đổi hàng</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Chính sách bảo hành</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Chính sách hội viên</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Chính sách giao nhận</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">TƯ VẤN</h6>
                            <p><i className="fas fa-home me-3"></i> Tư vấn phong cách</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                Tư vấn chọn size
                            </p>
                            <p><i className="fas fa-phone me-3"></i>Hỏi đáp</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" >
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">© 2022 K&G Vietnam. All Rights Reserved</a>
            </div>
        </div>
    )
}

export default Footer