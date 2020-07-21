import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import CommonRouter from './components/CommonRouter/CommonRouter';
import Header from './components/Headers/Header';
import { useLocation } from 'react-router-dom'

function App() {

  var sra = false;
  const location = useLocation()

  
  const [state, setState] = useState(false);
  
  if (location.pathname != '/') {
    setState(true)
  }
  return (
    <>
      {state ? (< Header />) : (
        <>
          <Header />
          <CommonRouter>
            <Login />
          </CommonRouter></>)}
    </>
  );
}

export default App;
