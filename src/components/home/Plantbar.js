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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import styled from 'styled-components';
import PlantIndex from '../plants/PlantIndex';
import NotFoundPage from './NotFoundPage';
import TrefleApp from '../trefle-app/TrefleApp'
import Splash from './Splash';

const Plantbar = props => {
    const [ isOpen, setIsOpen ] = useState(false);

    // const Card = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // `;
    

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }


    return (
        <>
        <Router>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">The Garden</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                         <NavItem>
                        <Button><Link to="/">Home Page</Link></Button>
                        </NavItem>
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
            <div>
            <Switch>
            <Route exact path="/"><Splash token={props.token} fetchPlants={props.fetchPlants}/></Route>
            <Route exact path="/plantindex"><PlantIndex plants={props.plants} token={props.token} fetchPlants={props.fetchPlants}/></Route>
            <Route exact path="/trefleapp"><TrefleApp token={props.token} fetchPlants={props.fetchPlants} plants={props.plants}/></Route>
            <Route component={NotFoundPage} />
            </Switch>
            </div>
        </Router> 
        </>
    )
}

export default Plantbar;