import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import PageDefault from '../DefaultPage';
import PesquisadoresImg from '../../assets/images/Pesquisadores/pesquisadores.svg';
import Docentes from './img/docente.png';
import Discentes from './img/discente.png';

const PesquisadoresContainer = styled.div`
    width: 100%;
    heigth: 100%;    
`
const Cards = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 10px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        padding: 0;
        width: 90%;
        margin: 30px auto;
        flex-direction: row;
        justify-content: space-between;
    }

    @media(min-width: 1280px){
        width: 70%;
        margin: 30px auto;
    }
`
const Pesquisador = styled.div`
    width: 300px;
    height: 330px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid var(--color-pagina);
    
    img{
        height: 180px;
    }

    @media(min-width: 1280px){
        width: 350px;
        height: 370px;
        img{
            height: 200px;
        }
    }
`
const Description = styled.p`
    padding: 10px;
    color: var(--color-descriptions);

    @media(min-width:1280px){
        font-size: 1.2rem;
    }
`
const LinkTo = styled(Link)`
    text-decoration: none;
`
const Button = styled(Link)`
    width: 200px;
    height: 50px;
    margin: 20px auto;
    color: var(--color-botao-texto);
    background-color: var(--color-pagina-botao);
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 768px){
        margin: 20px 40px 20px auto;
        
    }
    @media(min-width:1280px){
        margin: 20px 200px 20px auto;
        
    }
`
function Pesquisadores() {
    return (
        <PageDefault
            imageSrc={PesquisadoresImg}
            imageAlt="Imagem Pesquisadores"
            title="Muitas pessoas tornam o nosso projeto possível"
            description="Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente"
        >
            <PesquisadoresContainer>
                <Cards>
                    <LinkTo to="/docentes">
                        <Pesquisador>
                            <img src={Docentes} alt="" /><br />
                            <Description>Docentes</Description><br />
                            <Description>Listas dos pesquisados do LIS e um resumão de suas principais funções no grupo, trabalhos e projetos. </Description>
                        </Pesquisador>
                    </LinkTo>
                    <LinkTo to="/discentes">
                        <Pesquisador>
                            <img src={Discentes} alt="" /><br />
                            <Description>Discentes</Description><br />
                            <Description>Listas dos pesquisados do LIS e um resumão de suas principais funções no grupo, trabalhos e projetos. </Description>
                        </Pesquisador>
                    </LinkTo>
                </Cards>
                <Button to="/criarconta">Faça parte do nosso time</Button>
            </PesquisadoresContainer>
        </PageDefault>
    );
}

export default Pesquisadores