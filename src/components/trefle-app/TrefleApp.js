import React, {useState, useEffect } from 'react';
import TrefleAppDisplay from './TrefleAppDisplay'
import styled from 'styled-components';

const Background = styled.div`
    height: 135vh;
    width: 100vw;
    overflow: scroll;
    justify-content: center;
    background: linear-gradient(180deg, rgba(215, 189, 148, 0) 0%, rgba(215, 189, 148, 0.96) 100%);
    // background: lineear-gradient(to bottom, transparent, #D7BD94, #AC900D);
`;


const TrefleApp = (props) => {
    const [result, setResult] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ updateActive, setUpdateActive ] = useState(false);
    const [ plantToUpdate, setPlantToUpdate ] = useState({});
    const [ pageNumber, setPageNumber ] = useState(0);

    // console.log(`TREFLEAPP: `, props)
    // console.log(`TREFLEAPP RESULT PROP: `, result);


    const handleSubmit = (event) => {
        event.preventDefault()
        setPageNumber(0);
        props.fetchPlants();
    }

    const changePageNumber = (event, direction) => {
        event.preventDefault()
        if (direction === 'down') {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
                props.fetchPlants();
            }
        }
        if (direction === 'up') {
            setPageNumber(pageNumber + 1);
            props.fetchPlants();
        }
    }

    const editUpdatePlant = (plant) => {
        setPlantToUpdate(plant);
        // console.log(plant);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }


    useEffect( () => {
        if (search !== ''){
            props.fetchPlants();
        }  
    }, [pageNumber])

    return (
        <>
        <Background>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <span><h3 style={{marginTop: '3em'}}>Enter a common name to search for a plant:</h3></span>
                    <input 
                    style={{marginTop: '3em'}}
                    type="text"
                    name="search"
                    onChange={e => {setSearch(e.target.value)}}
                    required/>
                    <br />
                    <button style={{marginTop: '2em', borderRadius: '9px', backgroundColor: '#027A93', opacity: '0.7', color: '#E5E5E5'}}>Submit Search</button>
                    <hr style={{backgroundColor: '#FED701'}}/>
                    <hr style={{backgroundColor: '#FED701'}}/>
                    <br />
                </form>
                <br />
                {props.plants.length === 0 ?  null : (<TrefleAppDisplay  token={props.token} plants={props.plants} handleAdd={props.handleAdd} changePageNumber={changePageNumber} /> )}
                {search === "" ? null : (<div className="spinner-grow" role="status"><span className="sr-only">Loading...</span></div>)}
                    
            </div>
        </Background>
        </>
    )

}

export default TrefleApp;