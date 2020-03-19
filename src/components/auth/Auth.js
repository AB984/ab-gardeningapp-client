import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import styled from 'styled-components';
import LandingMoon from '../assets/landing-page-moon.jpeg';

const Moon = styled.img`
    width: 100vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const Background = styled.div`
    background: linear-gradient(180deg, rgba(215, 189, 148, 0) 0%, rgba(215, 189, 148, 0.96) 100%);
`;

const Auth = (props) => {
    console.log('AUTH: ', props)
    return (
        <Background>
        <Moon src={LandingMoon} alt="moon" />
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
        </Background>
    )
}

export default Auth;