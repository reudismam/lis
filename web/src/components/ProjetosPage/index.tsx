import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {PROJETOS} from '../../Data/projetos';
import { CardProjeto } from '../ProjetosCard';

const ProjetList = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
const ProjetoName = styled.h2`
    color: var(--color-descriptions);
    margin-top: 10px;
    font-weight: normal;
    padding-left: 20px;
`
const Description = styled.p`
    padding: 20px;
    height: 100px;
    font-size: 1.2rem;
    color: var(--color-descriptions);
    overflow: hidden;
`
const Imagens = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
        height: 320px;
        flex-direction: row;
    }
`
const Left = styled.div`
    width: 100%;
    padding: 20px 20px 0 20px;
    @media(min-width: 768px){
        width: 50%;
        padding: 20px 0 20px 20px;
        border-radius: 8px;
    }
`
const Right = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    @media(min-width: 768px){
        width: 50%;
        padding: 20px 20px 20px 10%;
        border-radius: 8px;
    }
    
`
const ImgLeft = styled.div`
    width: 60%;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 768px){
        background-color:
        width: 59%;
        height: 100%;
        padding-right: 2%;
        border-radius: 8px;
        .first{
            margin-bottom: 10%;
        }
    }
`
const Img = styled.div`
    width: 90%;
    height: 48%;
`
const ImgRight = styled.div`
    width: 40%;
    height: 170px;
    @media(min-width: 768px){
        width: 41%;
        height: 100%;
        border-radius: 8px;
        
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`
const Button = styled(Link)`
    width: 100px;
    height: 40px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px 20px auto;
    border-radius: 8px;
    background-color: var(--color-pagina-botao);
    color: var(--color-botao-texto);
    font-weight: bold;
    font-size: 1.2rem;
`
export default function Projetos(){
    return(
        <ProjetList>
            {
                PROJETOS.filter(p => p.featured == true).map((projetos) => {
                    return(
                        <CardProjeto key={projetos.name}>
                            <Imagens>
                                <Left>
                                    <Image src={require(`../../assets/${projetos.image}`)} alt={projetos.name} />
                                </Left>
                                <Right>
                                    <ImgLeft>
                                        <Img>
                                            <Image src={require(`../../assets/${projetos.image1}`)} alt={projetos.name} className="first"/>
                                        </Img>
                                        <Img>
                                            <Image src={require(`../../assets/${projetos.image2}`)} alt={projetos.name} />
                                        </Img>
                                    </ImgLeft>
                                    <ImgRight>
                                        <Image src={require(`../../assets/${projetos.image3}`)} alt={projetos.name} />
                                    </ImgRight>
                                </Right>
                            </Imagens>
                            <ProjetoName>
                                {projetos.name}
                            </ProjetoName>
                            <Description>
                                {projetos.description}
                            </Description>
                            <Button to="">Acesse</Button>
                        </CardProjeto>
                    );
                })
            }
        </ProjetList>
    );
}