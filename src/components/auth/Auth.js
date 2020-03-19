import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import styled from 'styled-components';
import LandingMoon from '../assets/landing-page-moon.jpeg';

const Moon = styled.img`
    width: 100%;
    height: 23vh;
    display: block;
    margin: 0 auto;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 666%;
    text-align: center;
    marginTop: 4em;
    color: #6B6B6B;
`;

const Background = styled.div`
    background: linear-gradient(180deg, rgba(215, 189, 148, 0) 0%, rgba(215, 189, 148, 0.96) 100%);
    // object-fit: cover;
    // margin: 0 auto;
    height: 110vh;
    overflow: scroll;
    width: 100%;
`;

const Auth = (props) => {
    console.log('AUTH: ', props)
    return (
        <Background>
        <Moon src={LandingMoon} alt="moon" />
        <hr style={{backgroundColor: '#FED701'}}/>
        <hr style={{backgroundColor: '#FED701'}}/>
        <Title  >The Garden</Title>
        <hr style={{backgroundColor: '#FED701'}}/>
        <hr style={{backgroundColor: '#FED701'}}/>
        <br />
        <br />

        <Container className="auth-container">
            <Row>
                <Col md="5">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="2"><br /></Col>
                <Col md="5" className="login-col">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
        <br />
        <br />
        </Background>
    )
}

export default Auth;