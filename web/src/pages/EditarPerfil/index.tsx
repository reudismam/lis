import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/Editais/editais.svg';

const EditarPerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function EditarPerfil() {
    return (
        <PageDefault
            imageSrc={EditaisImg}
            imageAlt="Imagem de Editar Perfil"
            title="Editar Perfil"
            description="Descrição sobre a página"
        >
            <EditarPerfilContainer>
               <h1>Editar Perfil</h1>
            </EditarPerfilContainer>
        </PageDefault>
    );
}