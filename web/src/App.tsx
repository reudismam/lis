import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Editais from './pages/Editais';
import './App.css';

const Pagina404 = () => (<div>Página 404</div>);

function App() {  /*faltando onClick*/
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/editais' component={Editais}/>
        <Route path="/" component={Home} exact />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
