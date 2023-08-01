import AdminMenu from "./AdminMenu"
import HeaderAd from "./HeaderAd"
import { Outlet } from "react-router-dom"

const LayoutAd = () => {
    return (
        <div className="container-xxl">
            <HeaderAd />
            <Outlet />
            <AdminMenu />
        </div>

    )
}

export default LayoutAd