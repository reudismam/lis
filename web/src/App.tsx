import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {  /*faltando onClick*/ 
  return (
    <div className = "navbar">
      <header>
        <a href="#" className = "principal-item">LIS</a>
        <div className = "menu-toggle">
          <nav className="nav-menu">
            <ul className="nav-menu-list">
              <li><a className = "list-item">Início</a></li>
              <li><a className = "list-item">Sobre</a></li>
              <li><a className = "list-item">Pesquisadores</a></li>
              <li><a className = "list-item">Publicações</a></li>
              <li><a className = "list-item">Projetos</a></li>
              <li><a className = "list-item">Portifólio</a></li>
              <li><a className = "list-item">Notícia</a></li>
              <li><a className = "list-item">Editais</a></li>
              <li><a className = "list-item">Parceiros</a></li>
              <li><a className = "list-item">Contatos</a></li>
            </ul>
            <ul className = "itens-final">
              <li><a className = "list-item">Sair</a></li>
              <li><a className = "list-item"><span>Criar uma conta</span></a></li>
            </ul>
          </nav>
        </div>
    </header>

    </div>
  );
}

export default App;
