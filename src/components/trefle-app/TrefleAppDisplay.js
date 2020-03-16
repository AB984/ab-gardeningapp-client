import React from 'react';
import styled from 'styled-components';


const TrefleAppDisplay = (props) => {

console.log(`TrefleAppDisplay: `, props)
console.log(`TrefleAppDisplay: `, props.commonName)

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Plant = styled.div`
  margin: 5px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  justify-content: space-evenly;
  text-align: center;
  background: #027a93;
`;

const Thumbnail = styled.img`
  width: calc(100% - 20px);
  height: calc(70% - 10px);
  margin: 5px 5px 0 5px;
  border-radius: 5px;
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
  border-radius: 5px;
  border: 2px inset #191919;
`;


{/* <button onClick={FUNCTION TO ADD TO PLANT TABLE}>ADD To The GARDEN</button> */}

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
      {props.result.map((plant, key) => {
      // if(plant.common_name !== '' && plant.complete_data === true)
      return (
        
          <div>
            <div>
              <Plant key={key}>
              {plant.images.length === 0 ? (<Thumbnail src="../assets/alt-plant.jpg"/>) : (<Thumbnail src={plant.images[0].url} />)}
              <ScientificName>{plant.scientific_name}</ScientificName>
              <CommonName >{plant.common_name}</CommonName>
              <Button onClick={() => props.addPlant(plant)}>ADD to GARDEN</Button>
              </Plant>
            </div>
            <br />
          </div>
        
        )
      })}
    </Flex>
    <div>
      <button onClick={e => props.changePageNumber(e, "down")}>Previous 30</button>
      <button onClick={e => props.changePageNumber(e, "up")}>Next 30</button>
    </div>
    </>
  )
}

export default TrefleAppDisplay;