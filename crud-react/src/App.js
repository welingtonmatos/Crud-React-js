import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component= {Login} />
        <Route path="/cadastro" exact component= {Cadastro} />
      </Switch>
    </Router>
  );
}

export default App;
