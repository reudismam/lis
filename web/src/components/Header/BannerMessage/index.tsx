import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MessageContainer = styled.div`
    width: 70%;
    color: var(--color-cotainer-texto);
    text-align: center;
    margin: 10px 0;
    line-height: 1.4;

    @media(min-width: 768px){
        width: 500px;
        display: flex;
        flex-direction: column;
        text-align: start;
        margin-left: 50px;
    }
`

const Title = styled.h1`
    font-size: 2rem;
    
    @media(min-width: 768px){
        font-size: 2.6rem;
    }
`

const Description = styled.h2`
    font-size: 1rem;
    font-weight: normal;
    margin: 10px 0;
`

const Button = styled(Link)`
    display: flex;
    border-radius: 8px;
    border: 1px solid var(--color-botaodepagina-texto);
    height: 4rem;
    justify-content: center;
    align-items: center;
    color: var(--color-botaodepagina);
    text-decoration: none;
    font-size: 1.4rem;

    @media(min-width: 768px){
        width: 200px;
    }
`

export default function Message(){
    return(
        <MessageContainer>
            <Title>
                Somos apaixonados por inovação e fazemos disso nosso trabalho
            </Title>
            <Description>
                Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente
            </Description>
            <Button to="/projetos">
                Projetos
            </Button>
        </MessageContainer>
    );
}