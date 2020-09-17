import React from 'react';
import PageDefault from '../DefaultPage';
import ErrorImg from '../../assets/images/Error404/error404.svg';
import './styles.css';

export default function Erro() {
    return (
        <PageDefault
            imageSrc={ErrorImg}
            imageAlt="Imagem Error"
            title="Erro 404"
            description="Página não encontrada!"
        >
        <div className="principal404">
            <div className="bottom404">
                <p id="ops" className="animate__animated animate__bounce">Ops!</p>
                <br /><br />
                <p id="text404">A página que você procura foi removida, renomeada ou não existe!
                pode ter ocorrido falha na digitação do endereço do site
                ou com sua conexão com a internet.
            </p>
            </div>
        </div>
        </PageDefault>
    );
}