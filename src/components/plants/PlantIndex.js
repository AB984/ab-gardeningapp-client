import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PlantCreate from './PlantCreate';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';
import TrefleApp from '../trefle-app/TrefleApp';

const PlantIndex = (props) => {
    const [ plants, setPlants ] = useState([]);
    const [ updateActive, setUpdateActive ] = useState(false);
    const [ plantToUpdate, setPlantToUpdate ] = useState({});


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

    useEffect( () => {
        props.fetchPlants();
    }, [])
    return (
        <Container>
            <Row>
                <Col md="3">
                    {/* <TrefleApp fetchPlants={fetchPlants} token={props.token} /> */}
                </Col>
                <Col md="9">
                <PlantTable 
                plants={plants} 
                editUpdatePlant={editUpdatePlant}
                updateOn={updateOn}
                fetchPlants={props.fetchPlants} 
                token={props.token} />
                </Col>
                {updateActive ? <PlantEdit plantToUpdate={plantToUpdate} updateOff={updateOff} token={props.token} fetchPlants={props.fetchPlants} /> : <></> }
            </Row>
        </Container>
    )
}

export default PlantIndex;