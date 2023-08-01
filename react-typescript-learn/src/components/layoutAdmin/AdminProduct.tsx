import ListProduct from "../Admin/ListProduct"
import AdminMenu from "./AdminMenu"
import HeaderAd from "./HeaderAd"


const AdminProduct = () => {
    return (
        <div className="container-xxl">
            <HeaderAd />
            <div className="row row-cols-2">
                <AdminMenu />
                <ListProduct />
            </div>
        </div>
    )
}

export default AdminProduct