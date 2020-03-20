import React from 'react';
import styled, { keyframes } from 'styled-components';



const flash = keyframes`
    from, 50%, 
    to {
        opacity: .93:
    }
    25%, 75% {
        opacity: .66;
    }
`;

const Flash = styled.div`
    animation: 2s infinite ${flash};
`;

const Footer =() => {
    return (
        <>
            <div style={{backgroundColor: '#191919', color: '#85DBF2', borderTop: '.1em groove #027A93', padding: '.3em .1em'}}>
        <Flash>
                <p style={{fontSize: '.8em'}}>
                    Hello up there!  Grumbling without gratifying grounding?  Be grateful! Be gracious!  Group your golden guiles by genuine goodness and grant yourself gaggles of great gardening gaiety in the graces of grandiose germination!  --  AB Scherschel © 2020
                </p>
        </Flash>
            </div>

        </>
    )
};

export default Footer;