import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand className='me-5 brand' href='/'>
                <h1 className='mt-1'>Auto Rent</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto col-md-9' navbar>
                    <NavItem className='me-2 my-2'>
                        <NavLink className='nav-link col-2 col-md-12 offset-md-3 offset-lg-0' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem className='me-2 my-2'>
                        <NavLink className='nav-link col-2 col-md-12 offset-md-3 offset-lg-0' to='/search'>
                            <i className='fa fa-search fa-lg' /> Search
                        </NavLink>
                    </NavItem>
                    <NavItem className='ms-md-3 mt-2 mb-4'><UserLoginForm/></NavItem>
                </Nav>
                
            </Collapse>
        </Navbar>
    );
};

export default Header;