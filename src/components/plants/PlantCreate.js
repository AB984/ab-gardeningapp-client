import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PlantCreate = (props) => {
    const [ scientificName, setScientificName] = useState('');
    const [ commonName, setCommonName ] = useState('')
    const [ specifications, setSpecifications ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/plant/plants', {
            method: 'POST',
            body: JSON.stringify( {Scientific: scientificName, Common: commonName, specifications: specifications}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then ( (res) => res.json())
        .then ( (logData) => {
            console.log(logData);
            setScientificName('');
            setCommonName('');
            setSpecifications('');
            props.fetchPlants();
        })
    }

    return (
        <>
            <h3>Add a plant to your Garden from the Database</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="scientificName" />
                    <Input name="scientificName" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="commonName" />
                    <Input name="commonName" value={commonName} onChange={(e) => setCommonName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="specifications" />
                    <Input name="specifications" value={specifications} onChange={(e) => setSpecifications(e.target.value)} />
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>

        </>
    )

}

export default PlantCreate;