import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';

const PlantTable = (props) => {
console.log(props)

    const deletePlant = (plant) => {
        fetch(`http://localhost:3000/api/trefle/${plant.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( () => props.fetchPlants())
    }


    const plantMapper = () => {
        return props.plants.map((plant, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{plant.id}</th>
                    <td>{plant.scientific_name}</td>
                    <td>{plant.common_name}</td>
                    <td>{plant.images}</td>
                    <td>{plant.specifications}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdatePlant(plant); props.updateOn() }} >Update</Button>
                        <Button color="danger" onClick={() => {deletePlant(plant)}} >Delete</Button>
                    </td>

                </tr>
            )
        })
    }

    return (
        <>
            <h3>Plants in your garden</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Scientific Name</th>
                        <th>Common Name</th>
                        <th>Images</th>
                        <th>Specifications</th>
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