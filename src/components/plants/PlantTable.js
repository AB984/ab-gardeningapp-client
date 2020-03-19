import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

const PlantTable = (props) => {
    const {plant:plants} = props;

    const deletePlant = (plant) => {
        fetch(`${APIURL}/api/trefle/${plant.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( () => props.fetchDatabase())
    }


    const plantMapper = () => {
        // console.log(`plantMapper: `, plants)
        return plants.map((plant, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{plant.id}</th>
                    <td>{plant.scientific_name}</td>
                    <td>{plant.common_name}</td>
                    {/* <td>{plant.images}</td> */}
                    <td>{plant.specifications}</td>
                    <td>
                        <Button color="#02C9DA" onClick={() => {props.editUpdatePlant(plant); props.updateOn() }} >Update</Button>
                        <Button color='#02C9DA' onClick={() => {deletePlant(plant)}} >Delete</Button>
                    </td>

                </tr>
            )
        })
    }

    return (
        <>
            <br />
            <br />
            <h3>Plants in Your Garden</h3>
            <hr style={{backgroundColor: '#FED701'}}/>
            <hr style={{backgroundColor: '#FED701'}}/>
            <br />
            <Table striped hover bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Scientific Name</th>
                        <th>Common Name</th>
                        {/* <th>Images</th> */}
                        <th>Specifications</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {plantMapper()}
                </tbody>
            </Table>
        </>
    )
}

export default PlantTable;