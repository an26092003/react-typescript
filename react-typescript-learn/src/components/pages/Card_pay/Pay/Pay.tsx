import qr from '../img/qr.jpg'
import './Pay.css'
const Pay = () => {
    return <>
        <h1 className='pay__title'>Trang thanh toán</h1>

        <div className="container flex__pay">
            <div className="form__thanhtoan">
                <h3>Form đăng kí thanh toán</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Ho và tên</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Địa chỉ</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ghi chú</label> <br />
                        <textarea name="ghi chú" id="" ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success">Mua hàng</button>
                </form>
            </div>
            <div className="img__thanhtoan">
                <h3>Mã thanh toán</h3>
                <img src={qr} alt="" />
            </div>
        </div>

    </>
}

export default Pay