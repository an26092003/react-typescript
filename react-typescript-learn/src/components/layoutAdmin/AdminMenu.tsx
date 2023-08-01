import { Link } from "react-router-dom"


const AdminMenu = () => {
    return (
        <div className="admin-cate pt-5 col-2">
            <Link to="/admin" className="text-decoration-none text-dark">
                <div className="d-flex gap-1  ">
                    <p className="mt-2">Sản Phẩm </p>
                </div>
            </Link>
            <Link to="/admin" className="text-decoration-none text-dark">
                <div className="d-flex gap-1 mt-4">
                    <p className="mt-2">Phụ Kiện</p>
                </div>
            </Link>
            <Link to="/admin/user" className="text-decoration-none text-dark">
                <div className="d-flex gap-1 mt-4">
                    <p className="mt-2">User</p>
                </div>
            </Link>
        </div>
    )
}

export default AdminMenu