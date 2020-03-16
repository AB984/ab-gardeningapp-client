import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Plantbar from './components/home/Plantbar';
import Auth from './components/auth/Auth';
import PlantIndex from './components/plants/PlantIndex';
import NotFoundPage from './components/home/NotFoundPage';
import PlantCreate from './components/plants/PlantCreate'
// import PlantTable from './components/plants/PlantTable'
import Home from './components/home/Home';
import Splash from './components/home/Splash';


function App() {
  const [ sessionToken, setSessionToken ] = useState('');
  
  console.log(sessionToken)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    // console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
   if(sessionToken === localStorage.getItem('token')) {
      return (
        <Splash token={sessionToken}/>
    )}else{
      return(<Auth updateToken={updateToken} />)
    }
  }    
    return (
      <div>
        {protectedViews()}
        {/* <Home token={sessionToken} /> */}
      </div>
    );
}




export default App;
