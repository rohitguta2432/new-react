import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import CommonRouter from './components/CommonRouter/CommonRouter';

function App() {
  return (
    <>
        <CommonRouter>
        <Login/>
        </CommonRouter>
    </>
  );
}

export default App;
