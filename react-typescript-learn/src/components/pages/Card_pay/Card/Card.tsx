import './Card.css'
import { Link } from 'react-router-dom';
const Card = () => {
    return <div className="card">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Áo sơ mi nam</td>
                    <td>10000đ</td>
                    <td><img src="https://static.sonkimfashion.vn/static/file/image/7ef25e133950433eb1d610c1165796a0/ao-polo-jockey-nam-1225-xanh-den-j1225-p1s200(1)_grande.jpg" alt="" /></td>
                    <td className='des'>Áo sơ mi là một loại áo cổ truyền, phổ biến trong thời trang nam và nữ. Áo sơ mi thường có kiểu dáng thẳng và dài, được thiết kế với cổ áo và tay dài. Vật liệu thường được sử dụng để sản xuất áo sơ mi là vải cotton hoặc polyester, tùy thuộc vào mục đích sử dụng và phong cách thời trang.</td>
                    <td >
                        <button className='btn btn-success mua'><Link to="/pay" className='link__card'>Mua</Link></button>
                        <button className='btn btn-danger xoa'>Xóa</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Áo sơ mi nữ</td>
                    <td>10000đ</td>
                    <td><img src="https://static.sonkimfashion.vn/static/file/image/8dd69de441ee47d38f7f6c6dae02bbe3/ao-polo-jockey-nam-1225-xam-j1225-p1s200(1)_master.jpg" alt="" /></td>
                    <td className='des'>Áo sơ mi cũng có thể được kết hợp với nhiều loại quần như quần tây, quần jean, quần short hoặc chân váy. Đây là một trong những lựa chọn phổ biến nhất cho cả nam và nữ trong khi đi làm, dự tiệc hay đi chơi.</td>
                    <td >
                        <button className='btn btn-success mua'><Link to="/pay" className='link__card'>Mua</Link></button>
                        <button className='btn btn-danger xoa'>Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Card