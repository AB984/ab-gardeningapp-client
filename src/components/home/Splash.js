import React, { useState } from "react";
import styled from 'styled-components';
import Phases from '../assets/header-moon-phases.jpeg';

const Moon = styled.img`
    width: 100vw;
    height: 37vh;
    display: block;
    margin: 0 auto;
    overflow: scroll;
    object-fit: cover;
    box-shadow:0px 9px 19px 0px rgba(0,0,0,0.95);
`;

const Background = styled.div`
    height: 110vh;
    width: 100vw;
    flex-grow: 1;
    overflow: scroll;

    background: linear-gradient(180deg, rgba(215, 189, 148, 0) 0%, rgba(215, 189, 148, 0.96) 100%);
    // background: lineear-gradient(to bottom, transparent, #D7BD94, #AC900D);
`;


const Splash = (props) => {
    console.log(`SPLASH PROPS: `, props)
    

    return (
        <Background>
            <Moon src={Phases} alt="moon" />
            <h1 className='appTitle' style={{fontFamily: 'Caudex', flexGrow: '1', fontSize: '50px', color: '#AC900D', marginTop: '-1.7em', textShadow: '.05em .1em .1em #6B6B6B'}}>Welcome to the Garden</h1>
            <br />
            <br />
            <hr style={{backgroundColor: '#FED701'}}/>
            <hr style={{backgroundColor: '#FED701'}}/>
            <h3 style={{textAlign: 'center', marginTop: '3em'}}>We are glad you're here. </h3>
            <h3 style={{padding: '.1em 0', textAlign: 'center', marginTop: '3em'}}>In this incredible application, </h3>
            <h3 style={{padding: '.1em 0', textAlign: 'center', marginTop: '3em'}}>you can create a customized table of your garden contents </h3>
            <h3 style={{padding: '.1em 0', textAlign: 'center', marginTop: '3em'}}> and keep track of tasks in time with the stages of the moon. </h3>
            <h3 style={{textAlign: 'center', marginTop: '3em'}}>Navigate to Find Plants to get started! </h3>
            <br />
            <br />
        </Background>
    )
}

export default Splash