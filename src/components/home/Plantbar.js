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
import { makeStyles } from '@material-ui/core/styles';
import PlantIndex from '../plants/PlantIndex';
import NotFoundPage from './NotFoundPage';
import TrefleApp from '../trefle-app/TrefleApp'
import Splash from './Splash';
import APIURL from '../../helpers/environment'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'black',
        // flexGrow: 1,
        flex: 1
        // float: 'left',

        // grows in same porportion as the window size
    }, 
    color: {
        backgroundColor: 'black'
    }
})

const Plantbar = props => {
    const [ isOpen, setIsOpen ] = useState(false);

    const classes = useStyles();

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    const [ plant, setPlant ] = useState({});
    const [ scientificName, setScientificName] = useState('');
    const [ commonName, setCommonName ] = useState('')
    const [ images, setImages ] = useState('');
    const [ specifications, setSpecifications ] = useState('');

function handleAdd(plants) {
    console.log(`TrefleAppDisp plant: `, plants)
    fetch(`${APIURL}/api/trefle`, {
        method: 'POST',
        // body: JSON.stringify( {scientific_name: plant.scientific_name, common_name: plant.common_name, specifications: specifications}),
        body: JSON.stringify( plants ),
        // images: plant.images,
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then(console.log(JSON))
    .then ( (res) => res.json())
    .then(json => {
        console.log('JSON CONSOLE: ', json.owner)
        setPlant(json);
        setScientificName(json.scientifc_name);
        setCommonName(json.common_name);
        // setImages(json.images);
        setSpecifications(json.specifications);
        console.log(scientificName)
        // props.fetchPlants();
      }) 
    .catch( err => console.log(err))
  }



    return (
        <>
        <Router>
            <Navbar light expand="md" style={{backgroundColor:'#191919', borderBottom: '.1em groove #027A93', alignItems: 'stretch'}}>
                <NavbarBrand style={{color: '#E5E5E5', fontFamily: 'Fira Sans'}} href="/">The Garden</NavbarBrand>
                <NavbarToggler onClick={toggle} style={{backgroundColor: '#027A93'}}/>
                <Collapse style={{paddingLeft: '65vw'}} isOpen={isOpen} navbar>
                    <Nav  navbar>
                         <NavItem>
                        <Button style={{borderRadius: '9px', backgroundColor: '#027A93', opacity: '0.85'}}><Link to="/" style={{color: '#E5E5E5', fontFamily: 'Roboto, sans-serif'}}>Home Page</Link></Button>
                        </NavItem>
                        <NavItem>
                        <Button style={{borderRadius: '9px', backgroundColor: '#027A93', opacity: '0.85'}}><Link to="/trefleapp" style={{color: '#E5E5E5', fontFamily: 'Roboto, sans-serif'}}>Find Plants</Link></Button>
                        </NavItem>
                        <NavItem>
                        <Button style={{borderRadius: '9px', backgroundColor: '#027A93', opacity: '0.85'}}><Link to="/plantindex" style={{color: '#E5E5E5', fontFamily: 'Roboto, sans-serif'}}>Your Plants</Link></Button>
                        </NavItem>
                        {/* ADD A PAGE FOR MOON PLANTING GUIDE !!!  */}
                        <NavItem>
                            <Button onClick={props.clearToken} style={{borderRadius: '9px', backgroundColor: '#027A93', color: '#E5E5E5', opacity: '0.85', fontFamily: 'Roboto, sans-serif'}}>Logout User</Button>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
            <Route exact path="/"><Splash token={props.token} /></Route>
            <Route exact path="/plantindex"><PlantIndex plant={plant} token={props.token} /></Route>
            {/* fetchPlants={props.fetchPlants} */}
            <Route exact path="/trefleapp"><TrefleApp token={props.token} fetchPlants={props.fetchPlants} plants={props.plants} handleAdd={handleAdd}/></Route>
            <Route component={NotFoundPage} />
            </Switch>
        </Router> 
        </>
    )
}

export default Plantbar;