import React, { useState } from 'react';
import { ModalHeader, FormGroup, Button, Form, Label, Modal, ModalBody, Input } from 'reactstrap';
import APIURL from '../../helpers/environment'

const PlantEdit = (props) => {
    const [ scientificName, setScientificName] = useState(props.plantToUpdate.scientific_name);
    const [ commonName, setCommonName ] = useState(props.plantToUpdate.common_name)
    const [ images, setImages ] = useState(props.plantToUpdate.images)
    const [ specifications, setSpecifications ] = useState(props.plantToUpdate.specifications);
    // https://trefle.io/api/plants

    const plantUpdate = (event, plant) => {
        event.preventDefault();
        fetch(`${APIURL}/api/trefle/${props.plantToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({scientific_name: scientificName, common_name: commonName, images: images, specifications: specifications}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => {
            props.fetchDatabase();
            props.updateOff();
        })
    }

    return (
        <Modal style={{textAlign: 'center'}} isOpen={true}>
            <ModalHeader style={{color: '#E5E5E5', fontFamily: 'Fira Sans', backgroundColor: '#6B6B6B'}}>Edit a Plant Entry</ModalHeader>
            <ModalBody style={{boxShadow: 'inset 0px -2px 15px 1px #6B6B6B'}}>
                <Form onSubmit={plantUpdate}>
                <FormGroup>
                    <Label htmlFor="scientificName" />
                    <Input name="scientificName" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="commonName" />
                    <Input name="commonName" value={commonName} onChange={(e) => setCommonName(e.target.value)} />
                </FormGroup>
                {/* add an input to change images ??? */}
                <FormGroup>
                    <Label htmlFor="specifications" />
                    <Input name="specifications" value={specifications} onChange={(e) => setSpecifications(e.target.value)} />
                </FormGroup>
                    <Button style={{borderRadius: '9px', backgroundColor: '#027A93', color: '#E5E5E5', opacity: '0.85'}} type="submit">Update the Plant!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default PlantEdit;