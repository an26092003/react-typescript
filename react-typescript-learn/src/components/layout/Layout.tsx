import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Menu from "./Menu"
const Layout = () => {
    return (
        <>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </>

    )
}

export default Layout