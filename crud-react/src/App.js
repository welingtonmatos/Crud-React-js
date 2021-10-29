import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component= {Login} />
        <Route path="/home" exact component= {Home} />
        <Route path="/cadastro" exact component= {Cadastro} />
      </Switch>
    </Router>
  );
}

export default App;
