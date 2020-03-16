import React, {useState, useEffect } from 'react';
import TrefleAppDisplay from './TrefleAppDisplay'

// TREFLE: If you need to perform client-side requests, you will have to request a client-side token from your backend, and get a JWT token in return. This token will be usable on the client side. This call need you secret access token, and the url of the website the client side requests will come from.
// https://trefle.io/api/auth/claim?token=${key}&origin=${serverURL}

// const key = 'M0RnR3hmWTl1aFpCdk9hM2F1MzVEZz09';  // personal authority to access trefle data
// const clientURL = 'http://localhost:3001/'

const TrefleApp = (props) => {
    const [result, setResult] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ updateActive, setUpdateActive ] = useState(false);
    const [ plantToUpdate, setPlantToUpdate ] = useState({});
    const [ pageNumber, setPageNumber ] = useState(0);

    console.log(`TREFLEAPP: `, props)
    console.log(result);

    // const fetcher = () => {
    //     console.log("fetching")
    //     fetch('http://localhost:3000/api/trefleauth', {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //     .then( res => {
    //         console.log(res)
    //         if ( res.status !== 200 ) {
    //             throw new Error( 'fetch error' );
    //         } else return res.json();
    //     })
    //     .then(json => {
    //         if ( json.length === 0 ) {
    //             throw new Error('no results');
    //         } else {
    //             setResult(json.plants)
    //             // console.log(json)
    //         }})
    //         .catch(err => console.log(err))
    // }

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
        console.log(plant);
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
    }, [pageNumber, search])

    return (
        <>
        <div>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <span>Enter a common name to search for a plant:</span>
                    <input 
                    type="text"
                    name="search"
                    // onChange={e => {}}
                    required/>
                    <br />
                    <button onClick={e => {setSearch(e.target.value);
                        console.log(e.target);}}>Submit Search</button>
                </form>
                {result.length > 0 ? (<TrefleAppDisplay  result={result} addPlant={props.addPlant} changePageNumber={changePageNumber} />) : null}
                    
            </div>
        </div>
        </>
    )

}

export default TrefleApp;