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
    const [ plants, setPlants ] = useState([]);
    
    console.log(`HOME PROPS: `, props)

//     const Card = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;

    const fetchPlants = () => {
        console.log(`fetching..`)
        fetch(`${APIURL}/api/trefleauth`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => {
            if ( res.status !== 200 ) {
                throw new Error( 'fetch error' );
            } else return res.json()
        }).then(plantData => {
            if ( plantData.length === 0 ) {
                throw new Error('no results');
            } else {
            setPlants(plantData);
            console.log('plantData', plantData);
        }
    }).catch(err => console.log(err));

    }
    
    return(
        <>
            <Plantbar token={props.token} clearToken={props.clearToken} fetchPlants={fetchPlants} plants={plants} />
            {/* <Plantbar addPlant={addPlant} clearToken={props.clearToken} token={props.token}  fetchPlants={fetchPlants} plants={plants}/> */}
            {/* <Splash token={props.token}/> */}
            <Footer />
        </>
)
};

export default Home;