import React, { useState } from 'react';
import styled from 'styled-components';
// import APIURL from '../../helpers/environment'
import AltImg from '../assets/alt-plant.jpg'


const TrefleAppDisplay = (props) => {

console.log(`TrefleAppDisplay: `, props)
// console.log(`TrefleAppDisplay: `, props.result.plants[0].common_name)

const Flex = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  // padding: 2em 0;
  margin: 0 auto
`;

const Plant = styled.div`
  margin: 5px;
  top: 7px;
  width: 300px;
  height: 200px;
  border-radius: 9px;
  justify-content: space-evenly;
  text-align: center;
  background: #027a93;
  flex: 1
`;

const Thumbnail = styled.img`
  width: calc(100% - 20px);
  height: calc(70% - 10px);
  margin: 5px 5px 0 5px;
  border-radius: 9px;
`;

const ScientificName = styled.h5`
  margin: 0px 0 0 0;
  color: #fed701;
`;

const CommonName = styled.p`
  height: 20%;
  color: #191919;
  overflow-wrap: break-word;
  overflow: scroll;
`;
const Button = styled.button`
  margin: 0px 0 0 0;
  color: #fed701;
  background-color: #027a93;
  border-radius: 9px;
  border: 2px inset #191919;
  posistion: relative;
`;


// const [ scientificName, setScientificName] = useState('');
// const [ commonName, setCommonName ] = useState('')
// const [ images, setImages ] = useState('');
// const [ specifications, setSpecifications ] = useState('');

// // function addPlant(plant) {
// //     handleAdd(plant);
    
// // }

// function handleAdd(plants) {
//     console.log(`TrefleAppDisp plant: `, plants)
//     fetch(`${APIURL}/api/trefle`, {
//         method: 'POST',
//         // body: JSON.stringify( {scientific_name: plant.scientific_name, common_name: plant.common_name, specifications: specifications}),
//         body: JSON.stringify( plants ),
//         // images: plant.images,
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': props.token
//         })
//     }).then(console.log(JSON))
//     .then ( (res) => res.json())
//     .then(json => {
//         console.log('JSON CONSOLE: ', json.owner)
//         setScientificName(json.scientifc_name);
//         setCommonName(json.common_name);
//         // setImages(json.images);
//         setSpecifications(json.specifications);
//         console.log(scientificName)
//         // props.fetchPlants();
//       }) 
//     .catch( err => console.log(err))
//   }

//       <div className="main">
//           <div className="mainDiv">
//               Stretch GOALS */}
//               <input value={query} onChange={(e) => setQuery(e.target.value)} />
//               <button onClick={fetcher} >Click for Plant Search</button>
//               {plant.common_name !==  || plant.complete_data === true ? null : <TrefleAppDisplay result={result} /> }
//           </div>
//       </div>
//   )
// })
  return (
    <>
    <Flex>
      {props.plants.plants.map((plant, key) => {
      // if(plant.common_name !== '' && plant.complete_data === true)
      return (
        
          <div>
            <div>
              <Plant key={key}>
              {plant.images.length === 0 ? (<Thumbnail src={AltImg}/>) : (<Thumbnail src={plant.images[0].url} />)}
              <ScientificName>{plant.scientific_name}</ScientificName>
              <CommonName >{plant.common_name}</CommonName>
              <Button onClick={() => {props.handleAdd(plant); alert("Successfully Added!")}}>ADD to GARDEN</Button>
              <br />
              </Plant>
              <br />
            </div>
            <br />
          </div>
        
        )
      })}
    </Flex>
    <div>
      <button style={{borderRadius: '9px', backgroundColor: '#027A93', color: '#E5E5E5', opacity: '0.85', fontFamily: 'Roboto, sans-serif'}} onClick={e => props.changePageNumber(e, "down")}>Previous 30</button>
      <button style={{borderRadius: '9px', backgroundColor: '#027A93', color: '#E5E5E5', opacity: '0.85', fontFamily: 'Roboto, sans-serif'}} onClick={e => props.changePageNumber(e, "up")}>Next 30</button>
    </div>
    </>
  )
}

export default TrefleAppDisplay;