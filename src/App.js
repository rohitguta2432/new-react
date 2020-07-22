import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import CommonRouter from './components/CommonRouter/CommonRouter';
import Header from './components/Headers/Header';
import { useLocation } from 'react-router-dom'

function App() {

  
  const location = useLocation()

  return (
    <>
    {location.pathname != '/' ? (<Header/>) : null}
          <CommonRouter>
            <Login />
          </CommonRouter>
    </>
  );
}

export default App;
