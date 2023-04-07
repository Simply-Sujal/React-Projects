import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import Home from './Components/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' />
          {/* <Route path='/' Component={Home}>
            <Home />
          </Route>
          <Route path='/' Component={Home}>
            <Home />
          </Route>
          <Route path='/' Component={Home}>
            <Home />
          </Route>
          <Route path='/' Component={Home}>
            <Home />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
