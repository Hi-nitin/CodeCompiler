import React, { useState } from 'react';
import Login from './components/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myhome from './components/home';
import Signup from './components/signup';
import Myproject from './components/myproject';
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Myhome />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myproject' element={<Myproject/>}/>

      </Routes>
    </BrowserRouter>

  );
};

export default App;
