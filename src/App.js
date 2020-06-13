import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar'
import Home from './components/Pages/Home'

const App = ()=> {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
