import React, {Suspense} from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
 } from 'react-router-dom';

import Concluido from './pages/Concluido';
import Contato from './pages/Contato';
import Criarconta from './pages/Criarconta/index';
import Editais from './pages/Editais';
import EditarPerfil from './pages/EditarPerfil';
import Erro404 from './pages/Erro404';
import Discentes from './pages/Discentes';
import Docentes from './pages/Docentes';
import FormEditais from './pages/FormEditais';
import FormNoticias from './pages/FormNoticias';
import FormPortfolio from './pages/FormPortfolio';
import Home from './pages/Home';
import Login from './pages/Login';
import Noticias from './pages/Noticias';
import Parceiros from './pages/Parceiros';
import Perfil from './pages/Perfil';
import Pesquisador from './pages/Pesquisador/index';
import Pesquisadores from './pages/Pesquisadores';
import Portfolio from './pages/Portfolio';
import Projetos from './pages/Projetos';
import Publicacoes from './pages/Publicacoes';
import Sobre from './pages/Sobre';



function App() { 

  return (
    <Router>
      <Suspense fallback = {<div> <h1>Ola</h1>{/*Aqui vai o efeito de Carregando */} </div>}> 
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/concluido' component={Concluido}/>
        <Route path='/contato' component={Contato}/>
        <Route path='/discentes' component={Discentes}/>
        <Route path='/docentes' component={Docentes}/>
        <Route path='/pesquisador/:id' component={Pesquisador}/>
        <Route path='/editais' component={Editais}/>
        <Route path='/editarperfil' component={EditarPerfil}/>
        <Route path='/formeditais' component={FormEditais}/>
        <Route path='/formnoticias' component={FormNoticias}/>
        <Route path='/formportfolio' component={FormPortfolio}/>
        <Route path='/login' component={Login}/>
        <Route path='/noticias' component={Noticias}/>
        <Route path='/parceiros' component={Parceiros}/>
        <Route path='/perfil' component={Perfil}/>
        <Route path='/pesquisadores' component={Pesquisadores}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/projetos' component={Projetos}/>
        <Route path='/publicacoes' component={Publicacoes}/>
        <Route path='/sobre' component={Sobre}/>
        <Route path='/criarconta' component={Criarconta}/>
        <Route path='*' component={Erro404} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
