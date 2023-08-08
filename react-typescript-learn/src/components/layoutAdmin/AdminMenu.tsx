import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser, faHouse, faLayerGroup, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const AdminMenu = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate()

    const loadLocalStorage = () => {
        try {
            const serializedStore = window.localStorage.getItem('user')
            if (serializedStore === null) return undefined;
            return JSON.parse(serializedStore);
        } catch (e) {
            console.log(e);
            return undefined;
        }
    }
    useEffect(() => {
        const token = loadLocalStorage()
        if (token) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    })
    const logOut = () => {
        localStorage.clear()
        navigate('/signin')
    }
    const handleOffcanvasOpen = () => {
        setShowOffcanvas(true);
    };

    const handleOffcanvasClose = () => {
        setShowOffcanvas(false);
    };

    return (
        <div className="admin__menu">
            <button onClick={handleOffcanvasOpen} className='btn__icon'><FontAwesomeIcon icon={faBars} /></button>
            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} style={{ width: '250px' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Drawer</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="content__menu-admin">
                        <Link to="/admin" className='box__li'>
                            <h5><FontAwesomeIcon icon={faHouse} />Dashboard</h5>
                        </Link>
                        <br />
                        <Link to="/admin/product" className='box__li'>
                            <h5><FontAwesomeIcon icon={faLayerGroup} />Product</h5>
                        </Link>
                        <br />
                        <Link to="/admin/category" className='box__li'>
                            <h5><FontAwesomeIcon icon={faList} />Category</h5>
                        </Link>
                        <br />
                        <Link to="/admin/user" className='box__li'>
                            <h5><FontAwesomeIcon icon={faCircleUser} />User</h5>
                        </Link>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
            <div className="input-wrapper">
                <input type="text" placeholder="Type here..." name="text" className="input" />
            </div>

            <div className="account__admin">
                <img src="https://png.pngtree.com/png-vector/20190925/ourlarge/pngtree-sync-account-glyph-icon-vector-png-image_1742905.jpg" alt="" />
            </div>
            <div className="icon__font">
                <FontAwesomeIcon style={{ color: '#212529' }} icon={faRightFromBracket} onClick={logOut}/>
            </div>

        </div>
    );
};

export default AdminMenu