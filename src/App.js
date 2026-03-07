import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { SignUp } from './sign-up';
import { Shop } from './shop';
import { Tasks } from './tasks';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/tasks' element={<Tasks />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
