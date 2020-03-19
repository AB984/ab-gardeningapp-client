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
            <h1 style={{color: '#6B6B6B'}}>Sign Up as New User</h1>
            {/* onSubmit={validateForm} */}
            <Form onSubmit={handleSubmit} name="signupForm" >
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="email"
                    required
                    value={email} />
                    { !email ? <p>email field is required</p> : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password" 
                    required
                    value={password} />
                    { password.length >= 4 || password.length < 1? null : <p>password must be at least 5 characters</p> }
                </FormGroup>
                <Button 
                type="submit"
                style={{borderRadius: '9px', backgroundColor: '#027A93', opacity: '0.85', color: '#E5E5E5'}}
                >Enter The Garden</Button>
            </Form>
        </div>
    )
}

export default Signup;