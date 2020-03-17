import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';


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
    console.log(`APP SESSIONTOKEN: `, sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
   if(sessionToken === localStorage.getItem('token')) {
      return (
        <Home token={sessionToken}/>
    )}else{
      return(<Auth updateToken={updateToken} />)
    }
  }    
    return (
      <div>
        {protectedViews()}
      </div>
    );
}




export default App;
