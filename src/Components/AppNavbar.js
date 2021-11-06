import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const AppNavbar = () => {
    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
            >
                <NavbarBrand href="/">
                    Water Quality Control
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Profile
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        A project by Team 31
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;