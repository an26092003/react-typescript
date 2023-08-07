import { Outlet } from "react-router-dom"
import './admin__style.css'
import AdminMenu from './AdminMenu';
const LayoutAd = () => {
    return (
        <div className="content__admin">
            <AdminMenu />
            <Outlet />
        </div>

    )
}

export default LayoutAd