import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles.css';

const discenteCard = ({ discente }) => (
<div className="geral">
    <div className="discente-card">
        <div className="top">
            <img src={discente.uploadImage} id="image" alt="Foto de perfil"  value={discente.uploadImage}/>
            <div className="nome_sobrenome_curso">
                <p id="nome_completo" value={discente.nome + discente.sobrenome}>{discente.nome + ' ' + discente.sobrenome}</p>
                <p id="curso" value={discente.curso}>Curso: {discente.curso}</p>
            </div>
        </div>
        <br/>
        {/* 
        <h3>Email: {discente.email}</h3>
        <h3>Telefone: {discente.telefone}</h3>
       
        <h3>Posição: {discente.posicao}</h3>
        <h5>Função: {discente.funcao}</h5>
        <h6>Titulação: {discente.titulacao}</h6>
        */}

        <div className="biografia">
            <p id="bio" value={discente.biografia}>{discente.biografia}</p>
        </div>
        <br/><br/>
        <div className="area_interesse">
            <p id="interesse">Áreas de interesse</p>
            <ul>
                {
                    discente.areaInteresse.map((area) => {
                        return (
                            <li value={discente.areaInteresse.area}>{area}</li>
                        );
                    })
                }
            </ul>
        </div><br/>
        <hr style={{border: '1px solid rgb(230, 230, 230)'}} />
        <div className="pesquisador">
            <button id="btn-pesq">
                <Link to={`/pesquisador/${discente.id}`}><p id="btn_link">Pagina do pesquisador</p></Link>
            </button>
        </div>
        
        {/* 
        <h2>Publicacoes</h2> 
        <ul>
            {
                discente.publicacao.map((publicacao) => {
                    return (
                        <li>{publicacao.referencia}</li>
                    );
                })
            }
        </ul>
        <hr/>
        <h2>Projetos</h2> 
        <ul>
            {
                discente.projeto.map((projeto) => {
                    return (
                        <li>{projeto.titulo}</li>
                    );
                })
            }
        </ul>
        <hr/>
        <br/><br/>
        */}
    </div>
</div>
)




export default discenteCard