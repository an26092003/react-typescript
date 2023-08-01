import { Link } from "react-router-dom"


const HeaderAd = () => {
    return (
        <div className="row row-cols-2 bg-primary">
            <div className="d-flex align-items-center">
                <Link to="/admin">
                    <img src="" alt="" width={50} className="ms-3 me-4" />
                </Link>
                <p className="text-light me-5 mt-2">Disboard</p>
                <input type="text" placeholder="Tìm kiếm ..." className="form-control" />
            </div>
            <p className="text-light mt-4 d-flex justify-content-center">
                {/* Xin chào: {loggedIn.name} <span className="login-status online"></span> */}
                <button className="btn btn-danger ms-4 mb-2"   > Logout</button>
            </p>

        </div>
    )
}

export default HeaderAd