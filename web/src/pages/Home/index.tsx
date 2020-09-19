import React from 'react';
import { Link } from "react-router-dom";
import PageDefault from '../DefaultPage';
import './styles.css';
import HomeImg from '../../assets/images/Home/home.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';
import SeeMoreButton from '../../components/SeeMoreButton';
import styled from 'styled-components';

const Title = styled.h1`
    color: var(--rodape);
    width: 100%;
    text-align: center;
    margin: 40px 0;
    font-size: 2rem;
`
export default function Home() {

    return (
        <PageDefault
            imageSrc={HomeImg}
            imageAlt="Imagem da Home"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos"
        >
            <Title>Confira os nossos projetos recentes</Title>
            <Projetos />
            <SeeMoreButton to="/projetos">Mais Projetos</SeeMoreButton>
            <Title>Vídeo em destaque</Title>
            <VideoDestaque />
            <SeeMoreButton to="/videos">Mais videos</SeeMoreButton>
         </PageDefault>
    );
}