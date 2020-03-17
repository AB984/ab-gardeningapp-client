import React, { useState } from "react";
import Footer from "./Footer";
import APIURL from '../../helpers/environment'
import Plantbar from "./Plantbar";

const Splash = (props) => {
    console.log(`SPLASH PROPS: `, props)

    
    const [ scientificName, setScientificName] = useState('');
    const [ commonName, setCommonName ] = useState('')
    const [ images, setImages ] = useState([]);
    const [ specifications, setSpecifications ] = useState('');

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
    



    return (
        <div>
              {/* <Plantbar token={props.token} clearToken={props.clearToken} /> */}

        <h1>Welcome to the Garden</h1>
        <p>Here you can create an edited bank of your garden contents and keep track of tasks in time with the stages of the moon.</p>
       
        
        </div>
    )
}

export default Splash