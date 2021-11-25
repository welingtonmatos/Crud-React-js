import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
