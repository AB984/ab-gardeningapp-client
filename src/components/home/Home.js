import React, { useState } from 'react';
import Footer from './Footer'
import TrefleApp from '../trefle-app/TrefleApp'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plantbar from './Plantbar';
import Splash from './Splash';
import PlantIndex from '../plants/PlantIndex';
import NotFoundPage from './NotFoundPage';
import APIURL from '../../helpers/environment'


const Home = (props) => {
    
    const [ scientificName, setScientificName] = useState('');
    const [ commonName, setCommonName ] = useState('')
    const [ images, setImages ] = useState([]);
    const [ specifications, setSpecifications ] = useState('');
    
    console.log(`HOME PROPS: `, props)

    const Card = styled.div`
display: flex;
flex-wrap: wrap;
`;

function addPlant(plant) {
    handleAdd(plant);
    
}

function handleAdd(plant) {
    console.log(`HOME plant: `, plant)
    fetch(`${APIURL}/api/trefle`, {
        method: 'POST',
        body: JSON.stringify( {scientific_name: plant.scientific_name, common_name: plant.common_name, images: plant.images, specifications: specifications}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then ( (res) => res.json())
    .then ( (logData) => {
        console.log(`HOME logData: `, logData);
        setScientificName(logData.scientific_name);
        setCommonName(logData.common_name);
        setImages(logData.images);
        setSpecifications(logData.specifications);
        // props.fetchPlants();
    })}
    
    return(
        <Router>
    <div>
  <Plantbar token={props.token} clearToken={props.clearToken} />
  <div>
    <Switch>
    {/* <Route exact path="/"><Home token={props.token} fetchPlants={props.fetchPlants}/></Route> */}
    {/* <Route exact path="/plantindex"><PlantIndex token={props.token} fetchPlants={props.fetchPlants}/></Route> */}
    <Route exact path="/plantindex"><PlantIndex token={props.token} fetchPlants={props.fetchPlants}/></Route>
    <Route exact path="/trefleapp"><Card><TrefleApp addPlant={addPlant} token={props.token} fetchPlants={props.fetchPlants}/></Card></Route>
    {/* <Route exact path="/planttable"><PlantTable /></Route> */}
    <Route component={NotFoundPage} />
    </Switch>
  </div>
</div>
</Router> 
)};

export default Home;