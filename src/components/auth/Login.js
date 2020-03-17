import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment'

const Login = props => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify( { user: { email: email, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then (
            response => response.json()
        ).then( (data) => {
            props.updateToken(data.sessionToken);
        })
    }

    // function validateForm() {
    //     var x = document.forms["loginForm"]["email"].value;
    //     if (x == "") {
    //         alert("Email must be filled out");
    //         return false;
    //     }
    //     var y = document.forms["loginForm"]["password"].value;
    //     if (y == "") {
    //         alert("Password must be filled out");
    //         return false;
    //     }
    // }

    return (
        <div>
            <h1>Log in with Existing Account</h1>
            <Form name="loginForm" onSubmit={handleSubmit} >
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" onChange={e => setEmail(e.target.value)} name="email" value={email} />
                    { !email ? <p>email field is required</p> : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={ e => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>

                <Button type="submit">Re-enter the Garden</Button>
            </Form>
        </div>
    )

}

export default Login;