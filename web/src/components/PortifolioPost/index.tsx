import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PORTIFOLIO } from '../../Data/portifolios';
import { CardTop } from '../PortifolioCard';

const ProjetList = styled.section`
    margin-top: 20px;
    line-height: 1.6;
    height: 100%;
    margin-bottom: 30px;
`
const Content = styled.div`
    @media(min-width: 768px){
        height: 270px;
        display: flex;
        flex-direction: column;
        align-items: initial;
    }

`
const PostName = styled.h2`
    color: var(--color-h3);
    margin: 10px 0;
    padding-left: 10px;
    text-align: initial;
    font-size: 1rem;
    font-weight: normal;
    @media(min-width: 768px){
        text-align: initial;
        margin: 0;    
    }
    @media(min-width: 1100px){
        font-size: 1.4rem;
    }
`
const Description = styled.p`
    width: 330px;
    padding: 0 10px;
    max-height: 150px;
    overflow: hidden;
    font-size: 0.6rem;
    color: var(--color-descriptions);
    @media(min-width: 768px){
        width: 100%;
        padding-left: 20px;
    }
    @media(min-width: 1100px){
        font-size: 0.8rem;
    }
`
const Image = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 8px 8px 0 0;
    @media(min-width: 768px){
        width: 60%;
        height: 100%;
        border-radius: 8px 0 0 8px;

    }
`
const PostBottom = styled.div`
    padding: 0 10px;
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-descriptions);
    @media(min-width: 768px){
        margin-top: 5px;
        margin-bottom: 30px;
    }
    @media(min-width: 1100px){
        font-size: 0.6rem;
    }
`
const Button = styled(Link)`
    width: 100px;
    height: 40px;
    margin: 15px 10px 10px auto;
    border-radius: 8px;
    text-decoration: none;
    color: var(--color-botao-texto);
    background-color: var(--color-pagina-botao);
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        margin: 40px 10px 10px auto;
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
    @media(min-width: 768px){
        p{
            margin: 0 2px;
        }
    }
`
export default function Portifolios() {
    return (
        <ProjetList>
            {
                PORTIFOLIO.filter(p => p.post === true).map((post) => {
                    return (
                        <CardTop key={post.name}>
                            <Image src={require(`../../assets/${post.image}`)} alt={post.name} />
                            <Content>
                                <PostBottom>
                                    <PostName>
                                        {post.name}
                                    </PostName>
                                    <Info>
                                        <Date>
                                            {post.date}
                                        </Date>
                                        <p>-</p>
                                        <Epoch>
                                            {post.epoch}
                                        </Epoch>
                                    </Info>
                                </PostBottom>
                                <Description>
                                    {post.description}
                                    <br/>
                                    <br/>
                                    {post.description}
                                </Description>
                                <Button to="">Acesse</Button>
                            </Content>
                        </CardTop >
                    );
                })
            }
        </ProjetList>
    );
}