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
        <Modal isOpen={true}>
            <ModalHeader>Edit a Plant Entry</ModalHeader>
            <ModalBody>
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
                    <Button type="submit">Update the Plant!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default PlantEdit;