import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = props => {

    console.log('SIGNUP PROPS: ', props)
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    let handleSubmit = event => {
        event.preventDefault();
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify( { user: {email: email, password: password }}),
            headers: new Headers( {
                'Content-Type': 'application/json'
            })
        }).then (
            response => response.json()
        ).then ( (data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Sign Up a New User</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                    { !email ? <p>email name is required</p> : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Enter The Garden</Button>
            </Form>
        </div>
    )
}

export default Signup;