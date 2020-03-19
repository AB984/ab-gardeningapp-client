import React, { useState } from "react";
import styled from 'styled-components';
import Phases from '../assets/header-moon-phases.jpeg';

const Moon = styled.img`
    width: 100vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, rgba(215, 189, 148, 0) 0%, rgba(215, 189, 148, 0.96) 100%);
    // background: lineear-gradient(to bottom, transparent, #D7BD94, #AC900D);
`;


const Splash = (props) => {
    console.log(`SPLASH PROPS: `, props)
    

    return (
        <Background>
            <Moon src={Phases} alt="moon" />
            <h1 className='appTitle' style={{fontFamily: 'Caudex', textAlign: 'center', fontSize: '50px', border: '2px solid white', marginTop: '-2em'}}>Welcome to the Garden</h1>
            <br />
            <br />
            <h3 style={{textAlign: 'center', marginTop: '3em', fontFamily: 'Fira Sans'}}>We are glad you're here. </h3>
            <h3 style={{textAlign: 'center', marginTop: '3em', fontFamily: 'Fira Sans Condensed'}}>In this incredible application, you can create a customized table of your garden contents and keep track of tasks in time with the stages of the moon. </h3>
            <h3 style={{textAlign: 'center', marginTop: '3em', fontFamily: 'Fira Sans Extra Condensed'}}>Click on Find Plants to get started! </h3>
        </Background>
    )
}

export default Splash