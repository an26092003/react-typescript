
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, OverlayTrigger, Popover, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

const Menu: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [showPopover, setShowPopover] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Do something with the search text
        console.log('Search submitted:', searchText);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setShowPopover(false);
            }
        };

        const handleGlobalClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };

        document.addEventListener('mousedown', handleGlobalClick);

        return () => {
            document.removeEventListener('mousedown', handleGlobalClick);
        };
    }, []);

    const togglePopover = () => {
        setShowPopover(!showPopover);
    };

    const popover = (
        <Popover id="popover-basic" ref={popoverRef}>
            <Popover.Body>
                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#register">Register</Nav.Link>
                </Nav>
            </Popover.Body>
        </Popover>
    );

    return (
        <Navbar bg="light" style={{borderBottom: '1px solid #ccc', height: '72px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '5'}} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://aristino.com/Data/upload/images/Logo/logo%20Aristino%20Final%202023%20(2).png" alt="Logo" className="menu__logo" /> {/* Replace "/path/to/logo.png" with the actual path to your logo image */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="#home"  className='link' style={{color: '#000', padding: '8px 20px', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px'}}>trang chủ</Nav.Link>
                        <Nav.Link href="#about" className='link' style={{color: '#000', padding: '8px 20px', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px'}}>sản phẩm</Nav.Link>
                        {/* <Nav.Link href="#about" className='link' style={{color: '#000', padding: '8px 20px', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px'}}>phụ kiên</Nav.Link> */}
                        <Nav.Link href="#about" className='link' style={{color: '#000', padding: '8px 20px', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px'}}>bộ sưu tập</Nav.Link>
                        {/* <NavDropdown title="Services" id="basic-nav-dropdown" style={{color: '#000'}}>
                            <NavDropdown.Item href="#service1" style={{color: '#000'}}>Service 1</NavDropdown.Item>
                            <NavDropdown.Item href="#service2" style={{color: '#000'}}>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#all-services" style={{color: '#000'}}>All Services</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link href="#contact" style={{color: '#000', padding: '8px 20px', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px'}}>về chúng tôi</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearchSubmit}>
                        <InputGroup style={{border: '1px solid #ccc', borderRadius: '8px'}}>
                            <Form.Control
                                type="text"
                                placeholder="Search"    
                                value={searchText}
                                onChange={handleSearchChange}
                                className="border-0 rounded-start search-input"
                            />
                            <Button variant="outline-secondary" type="submit" className="rounded-end search-button">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup>
                    </Form>
                    <Nav>
                        <OverlayTrigger trigger="click" placement="bottom" show={showPopover} onToggle={togglePopover} overlay={popover}>
                            <Nav.Link>
                                <FontAwesomeIcon style={{color: '#212529', paddingLeft: '12px', paddingRight: '12px'}} icon={faUser} />
                            </Nav.Link>
                        </OverlayTrigger>
                        <Nav.Link>
                            <FontAwesomeIcon style={{color: '#212529', paddingLeft: '12px', paddingRight: '12px'}} icon={faRightFromBracket} />
                        </Nav.Link>
                        <Nav.Link>
                            <FontAwesomeIcon style={{color: '#212529', paddingLeft: '12px', paddingRight: '12px'}} icon={faBell} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;

