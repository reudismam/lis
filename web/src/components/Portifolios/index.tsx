import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {PORTIFOLIO} from '../../Data/portifolios';
import Card from '../PortifolioCard';

const ProjetList = styled.section`
    margin-top: 20px;
    line-height: 1.6;
    height: 100%;
    margin-bottom: 30px;
    grid-template-columns: auto auto;
    @media(min-width: 768px){
        display: grid;
        grid-gap: 50px 80px;
    }
    @media(min-width: 1100px){
        grid-gap: 50px 100px;
    }
`
const PortifolioName = styled.h2`
    color: var(--color-h3);
    margin: 10px 0;
    padding-left: 10px;
    font-size: 1.2rem;
    font-weight: normal;
`
const Description = styled.p`
    width: 330px;
    padding: 0 10px;
    font-size: 0.8rem;
    color: var(--color-descriptions);
    overflow: hidden;
    @media(min-width: 768px){
        width: 100%;
    }
`
const Image = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 8px 8px 0 0;
    @media(min-width: 1100px){
        height: 200px;
    }
`
const PortifolioBottom = styled.div`
    padding: 0 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-descriptions);

`
const Button = styled(Link)`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    text-decoration: none;
    color: var(--color-botao-texto);
    background-color: var(--color-pagina-botao);
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        margin-left: 20px;
        font-size: 1.2rem;
    }
`
const Date = styled.p`

`
const Epoch = styled.p`
`
const Info = styled.div`
    display: flex;
    p{
        margin: 0 3px;
    }
`
export default function Portifolios(){
    return(
        <ProjetList>
            {
                PORTIFOLIO.filter(p => p.featured == true).map((portifolio) => {
                    return(
                        <Card key={portifolio.name}>
                            <Image src={require(`../../assets/${portifolio.image}`)} alt={portifolio.name} />
                            <PortifolioName>
                                {portifolio.name}
                            </PortifolioName>
                            <Description>
                                {portifolio.description}
                            </Description>
                            <PortifolioBottom>
                                <Button to="">Acesse</Button>
                                <Info>
                                    <Date>
                                        {portifolio.date} 
                                    </Date>
                                    <p>-</p>
                                    <Epoch>
                                        {portifolio.epoch}
                                    </Epoch>
                                </Info>
                            </PortifolioBottom>
                        </Card>
                    );
                })
            }
        </ProjetList>
    );
}