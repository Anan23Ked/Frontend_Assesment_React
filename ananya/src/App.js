import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import NoMatch from './components/NoMatch';


const App = () => {

  return (




    <main className='App'>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/home" element={<Home />} />
          <Route path="signup" element={<Register />} />


          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </main>




  )
}

export default App;
