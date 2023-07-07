
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
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://www.shareicon.net/download/2016/07/10/119874_apps.ico" alt="Logo" className="menu__logo" /> {/* Replace "/path/to/logo.png" with the actual path to your logo image */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#all-services">All Services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearchSubmit}>
                        <InputGroup>
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
                                <FontAwesomeIcon icon={faUser} />
                            </Nav.Link>
                        </OverlayTrigger>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Nav.Link>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faBell} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;

