import React, { useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import PlantIndex from '../plants/PlantIndex';
import APIURL from '../../helpers/environment'

const Splash = (props) => {
    console.log(`SPLASH PROPS: `, props)

    const [ plants, setPlants ] = useState([]);


    const fetchPlants = () => {
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


    return (
        <div>
        <h1>Welcome to the Garden</h1>
        <p>Here you can create an edited bank of your garden contents and keep track of tasks in time with the stages of the moon.</p>
       
        <Home token={props.token} fetchPlants={fetchPlants} />
        
        <div><Footer /></div>
        </div>
    )
}

export default Splash