import React, { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import TrefleApp from '../trefle-app/TrefleApp';
// import PlantCreate from '../plants/PlantCreate';

const Plantbar = props => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }


    return (
        <>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">The Garden</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                         {/* <NavItem>
                        <Button><Link to="/">Home Page</Link></Button>
                        </NavItem> */}
                        <NavItem>
                        <Button><Link to="/trefleapp">Find Plants</Link></Button>
                        </NavItem>
                        <NavItem>
                        <Button><Link to="/plantindex">Plant Index</Link></Button>
                        </NavItem>
                        {/* ADD A PAGE FOR MOON PLANTING GUIDE !!!  */}
                        <NavItem>
                            <Button onClick={props.clearToken}>Logout</Button>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Plantbar;