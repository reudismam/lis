import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.svg'
import './styles.css';

export class Nav extends Component {
    state = {
        toggle: false
    }
    menuToggle = () => { 
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){

        const {toggle} = this.state;
    
        return (
            <div className="teste">
                <header>
                    <Link to="/"><img alt="Logo" src={Logo} className="logo-lis"/></Link>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/pesquisadores">Pesquisadores</Link></li>
                        <li><Link to="/publicacoes">Publicações</Link></li>
                        <li><Link to="/projeto">Projetos</Link></li>
                        <li><Link to="/portifolio">Portfólio</Link></li>
                        <li><Link to="/noticias">Notícias</Link></li>
                        <li><Link to="/editais">Editais</Link></li>
                        <li><Link to="/parceiros">Parceiros</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li className="sa"><Link to="/login">Sair</Link></li>
                        <li><Link to="/criarconta">Criar uma conta</Link></li>
                        <li className="close" onClick={this.menuToggle} >X</li>
                    </ul>
                    <div className="menu" onClick={this.menuToggle} >Menu</div>
                </header>
            </div>
        );
    }
}

export default Nav;