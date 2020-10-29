import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/Editais/editais.svg';

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
            imageAlt="Imagem da página do Perfil"
            title="Perfil"
            description="Descrição Sobre a página"
        >
            <PerfilContainer>
                <h1>Perfil</h1>
            </PerfilContainer>
        </PageDefault>
    );
}