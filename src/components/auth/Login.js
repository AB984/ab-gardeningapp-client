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

    return (
        <div>
            <h1 style={{color: '#6B6B6B'}}>Existing Accounts</h1>
            <Form name="loginForm" onSubmit={handleSubmit} >
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email" 
                        onChange={e => setEmail(e.target.value)} 
                        name="email" 
                        required
                        value={email} />
                    { !email ? <p>email field is required</p> : null }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                    type="password" 
                    onChange={ e => setPassword(e.target.value)} 
                    name="password"
                    required
                    value={password} />
                    { password.length >= 4 || password.length < 1? null : <p>password must be at least 5 characters</p> }
                </FormGroup>

                <Button 
                type="submit"
                style={{borderRadius: '9px', backgroundColor: '#027A93', opacity: '0.85', color: '#E5E5E5'}}
                >Re-enter the Garden</Button>
            </Form>
        </div>
    )

}

export default Login;