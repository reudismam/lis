import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BannerProps } from '../Banner';

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
    font-size: 1.4rem;
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

const Message: React.FC<BannerProps> = (props) => {
    return(
        <MessageContainer>
            <Title>
                {props.title} 
            </Title>
            {props.description &&
            <Description>
                {props.description}
            </Description>
            }
            {props.buttonLink &&
            <Button to={props.buttonLink}>
                {props.buttonText}
            </Button>
            }
        </MessageContainer>
    );
}

export default Message;