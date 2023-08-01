import { Link } from "react-router-dom"
import AdminMenu from "../layoutAdmin/AdminMenu"
import HeaderAd from "../layoutAdmin/HeaderAd"


const ListProduct = () => {
    return (
        <><div>
            <table className="table table-bordered table-responsive ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Mô tả</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div></>
    )
}

export default ListProduct