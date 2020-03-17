import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import PlantCreate from './PlantCreate';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';

const PlantIndex = (props) => {
    const [ plants, setPlants ] = useState(props.plants);
    const [ updateActive, setUpdateActive ] = useState(false);
    const [ plantToUpdate, setPlantToUpdate ] = useState({});

    // setPlants(props.plants);

    const editUpdatePlant = (plant) => {
        setPlantToUpdate(plant);
        console.log(plant);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    // useEffect( () => {
    //     props.fetchPlants();
    // }, [])
    return (
        <Container>
            <Row>
                <Col md="3">
                </Col>
                <Col md="9">
                <PlantTable 
                plants={plants} 
                editUpdatePlant={editUpdatePlant}
                updateOn={updateOn}
                // fetchPlants={props.fetchPlants} 
                token={props.token} />
                </Col>
                {updateActive ? <PlantEdit plantToUpdate={plantToUpdate} updateOff={updateOff} token={props.token} /> : <></> }
            </Row>
        </Container>
    )
}

export default PlantIndex;