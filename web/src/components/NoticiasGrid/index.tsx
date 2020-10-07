import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {NOTICIAS} from '../../Data/noticias';
import Card from '../NoticiaCard';
const ProjetList = styled.section`
    margin-top: 20px;
    line-height: 1.6;
    height: 100%;
    padding: 0 10px;
    @media(min-width: 768px){
        display: grid;
        padding: 0 10%;
        justify-content: space-between;
        grid-gap: 10px 5%;
        grid-template-columns: 45% 45%; 
    }
    @media(min-width: 1100px){
        padding: 0 10px;
        grid-template-columns: 30% 30% 30%; 
    }
`
const Content = styled.div`
    width: 100%;
    @media(min-width: 768px){
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: initial;
    }
`
const PostName = styled.h1`
    color: var(--color-descriptions);
    margin-bottom: 10px;
    padding-left: 10px;
    text-align: initial;
    font-size: 0.8rem;
    @media(min-width: 1100px){
        font-size: 1rem;
    }
`
const MidiaDestaqueContainer = styled.div`
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 8px 8px 0 0;
    @media(min-width: 1100px){
        height: 200px;
    }
`
const Description = styled.p`
    width: 100%;
    padding: 0 10px;
    max-height: 50px;
    font-size: 0.78rem;
    overflow: hidden;
    color: var(--color-descriptions);
    @media(min-width: 768px){
        width: 100%;
        max-height: 60px;
        padding-left: 20px;
        font-size: 0.7rem;
    }
    @media(min-width: 1100px){
        max-height: 65px;
        font-size: 1rem;
    }
`
const Button = styled(Link)`
    width: 100%;
    height: 40px;
    margin: 10px auto;
    border-radius: 8px;
    text-decoration: none;
    color: var(--color-botao-texto);
    background-color: var(--color-pagina-botao);
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media(min-width: 768px){
        width: 100px;
        margin: 10px 10px 10px auto;
    }
`
const Post = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
    }
`
export default function Noticias(){
    return(
        <ProjetList>
            {
                NOTICIAS.filter(p => p.featured === true).map((post) => {
                    return(
                        <Card key={post.name}>
                            <PostName>
                                {post.name}
                            </PostName>
                            <Post>
                                <MidiaDestaqueContainer>
                                    <Image src={require(`../../assets/${post.image}`)} alt={post.name} />
                                </MidiaDestaqueContainer>
                                <Content>
                                    <Description>
                                        {post.description}
                                    </Description>
                                    <Button to="">Acesse</Button>
                                </Content>
                            </Post>
                        </Card >
                    );
                })
            }
        </ProjetList>
    );
}