import React from 'react';
import PageDefault from '../DefaultPage';
import './styles.css';
import DevImg from './dev.svg';

export default function Erro() {
    return (
        <PageDefault> 
            <div className="principal404">
            <div className="top404">
                <div className="left404">
                    <h1>ERRO 404</h1>
                    <h3>Página não encontrada!</h3>
                </div>
                <div className="right404">
                    <img src ={DevImg} />
                </div>
            </div>
            <div className="bottom404">
                <p id="ops" className="animate__animated animate__bounce">Ops!</p>
                <br/><br/>
                <p id="text404">A página que você procura foi movida, removida, renomeada ou não existe!
                pode ter ocorrido falha na digitação do endereço do site
                ou com sua conexão com a internet.
                </p>
            </div>
        </div>
         </PageDefault>
    );
}