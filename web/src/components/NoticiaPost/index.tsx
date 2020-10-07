import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NOTICIAS } from '../../Data/noticias';
import { CardTop } from '../NoticiaCard';

const ProjetList = styled.section`
    margin-top: 20px;
    line-height: 1.6;
    height: 100%;
`
const Content = styled.div`
    width: 100%;
    @media(min-width: 768px){
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: initial;
    }
`
const PostName = styled.h1`
    color: var(--color-h3);
    margin-bottom: 10px;
    padding-left: 10px;
    text-align: initial;
    font-size: 1rem;
    @media(min-width: 1100px){
        font-size: 1.6rem;
    }
`
const VideoDestaqueContainer = styled.div`
    @media(min-width: 768px) {
        width: 60%;
        margin-bottom: 40px;
    }
    @media(min-width: 1100px){  
        width: 55%;  
    }
`
const  Video = styled.iframe`
    width: 100%;
    height: 270px;
    @media(min-width: 768px) {
        width: 100%;
        height: 300px;
    }
    @media(min-width: 1100px){  
        height: 100%;  
    }
`
const Description = styled.p`
    width: 330px;
    padding: 0 10px;
    max-height: 260px;
    font-size: 0.78rem;
    overflow: hidden;
    color: var(--color-descriptions);
    @media(min-width: 768px){
        width: 100%;
        max-height: 250px;
        padding-left: 20px;
        font-size: 0.7rem;
    }
    @media(min-width: 1100px){
        max-height: 370px;
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
    @media(min-width: 768px){
        display: flex;
    }
`
export default function Portifolios() {
    return (
        <ProjetList>
            {
                NOTICIAS.filter(p => p.post === true).map((post) => {
                    return (
                        <CardTop key={post.name}>
                            <PostName>
                                {post.name}
                            </PostName>
                            <Post>
                                <VideoDestaqueContainer>
                                    <Video width="560" height="315" src="https://www.youtube.com/embed/fH2AKvTv6AI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                                </VideoDestaqueContainer>
                                <Content>
                                    <Description>
                                        {post.description}
                                    </Description>
                                    <Button to="">Acesse</Button>
                                </Content>
                            </Post>
                        </CardTop >
                    );
                })
            }
        </ProjetList>
    );
}