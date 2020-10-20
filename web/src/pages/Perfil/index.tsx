import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import Portifolios from '../../components/Portifolios';
import PortifolioPost from '../../components/PortifolioPost';
import EditaisImg from '../../assets/images/Editais/editais.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Portifolio() {
    return (
        <PageDefault
            imageSrc={EditaisImg}
            imageAlt="Imagem do Perfil"
            title="Perfil"
            description="Descrição Sobre a página"
        >
            <PerfilContainer>
                <h1>Perfil</h1>
            </PerfilContainer>
        </PageDefault>
    );
}