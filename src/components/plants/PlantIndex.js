import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
// import PlantCreate from './PlantCreate';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';
import APIURL from '../../helpers/environment'
import Air from '../assets/air-element.jpg';

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: scroll;
    background: linear-gradient(180deg, rgba(215, 189, 148, 0) 0%, rgba(215, 189, 148, 0.96) 100%);
    // background: lineear-gradient(to bottom, transparent, #D7BD94, #AC900D);
`;

const Element = styled.img`
    width: 9vw;
    height: auto;
    border-radius: 6px;
    display: block;
    margin: 0 auto;
`;

const PlantIndex = (props) => {
    const [ plant, setPlant ] = useState([]);
    const [ updateActive, setUpdateActive ] = useState(false);
    const [ plantToUpdate, setPlantToUpdate ] = useState({});

    // setPlants(props.plants);

    const fetchDatabase = () => {
        fetch(`${APIURL}/api/trefle`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
        .then((plantData) => {
            // console.log(`plantData from PLANT INDEX:`, plantData);
            setPlant(plantData);
            // console.log(plant);
        })
    }
    

    const editUpdatePlant = (plant) => {
        setPlantToUpdate(plant);
        // console.log(`PLANT INDEX editUpdatePlant: `, plant);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect( () => {
        fetchDatabase();
    }, [])

    return (
        <Background>
            <Container>
                <Row>
                    <Col md="8">
                    <PlantTable 
                    plant={plant}
                    editUpdatePlant={editUpdatePlant}
                    updateOn={updateOn}
                    fetchDatabase={fetchDatabase} 
                    token={props.token} />
                    </Col>
                    <Col md="1"><br/></Col>
                    <Col md="3">
                        <br />
                        <br />
                        <br />
                        <Element src={Air} alt="air element" />
                        <br />
                        <h3>Moon Phase : </h3>
                        <h4>Waning Crescent</h4>
                        <hr style={{backgroundColor: '#FED701'}}/>
                        <hr style={{backgroundColor: '#FED701'}}/>
                        <h5>Element : AIR</h5>
                        <h5>Plant-part : FLOWER</h5>
                        <h5>Soil : absorbant </h5>
                        <h5>Energy flows down to the roots</h5>
                        <h5>Avoid seed sewing</h5>
                        <h5>Harvest cut flowers</h5>
                        <h5>Barren Phase: Rest</h5>
                    </Col>
                    {updateActive ? <PlantEdit plantToUpdate={plantToUpdate} fetchDatabase={fetchDatabase} updateOff={updateOff} token={props.token} /> : <></> }
                </Row>
            </Container>
        </Background>
    )
}

export default PlantIndex;