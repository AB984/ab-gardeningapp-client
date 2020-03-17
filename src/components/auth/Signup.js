import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

const Signup = props => {

    console.log('SIGNUP PROPS: ', props)
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    let handleSubmit = event => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
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

    // function validateForm() {
    //     var x = document.forms["signupForm"]["email"].value;
    //     if (x == "") {
    //         alert("Email must be filled out");
    //         return false;
    //     }
    //     var y = document.forms["signupForm"]["password"].value;
    //     if (y == "") {
    //         alert("Password must be filled out");
    //         return false;
    //     }
    // }


    return (
        <div>
            <h1>Sign Up a New User</h1>
            {/* onSubmit={validateForm} */}
            <Form onSubmit={handleSubmit} name="signupForm" >
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                    { !email ? <p>email field is required</p> : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Enter The Garden</Button>
            </Form>
        </div>
    )
}

export default Signup;