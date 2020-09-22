import React, {useState, useEffect, useRef, FormEvent} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const discenteCard = ({ discente }) => (
    <div className="discente-card">
        <img src={discente.uploadImage} style={{width: '100px', height: '100px'}} />
        <h3>Nome: {discente.nome} </h3>
        <h3>Sobrenome: {discente.sobrenome}</h3>
        <h3>Email: {discente.email}</h3>
        <h3>Telefone: {discente.telefone}</h3>
        <h3>Curso: {discente.curso}</h3>
        <h3>Posição: {discente.posicao}</h3>
        <h5>Função: {discente.funcao}</h5>
        <h6>Titulação: {discente.titulacao}</h6>
        <h3>Biografia: {discente.biografia}</h3>
        <br/>
        <h2>Interesse</h2>
        <ul>
            {
                discente.areaInteresse.map((area) => {
                    return (
                        <li>{area}</li>
                    );
                })
            }
        </ul>
        

        <button >
            <Link to="/pesquisador">Pagina do pesquisador</Link></button>
        <hr/>
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
)




export default discenteCard