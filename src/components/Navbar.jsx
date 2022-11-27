import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

const Header = () => {

     // Collapse isOpen State
     const [isOpen, setIsOpen] = React.useState(false);

     return (
        <div style={{
            display: 'block', width: 550, padding: 30
        }}>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ADMINISTRATION</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                       
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
    }


export default Header