import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/Editais/editais.svg';

const FormNoticiasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function FormNoticias() {
    return (
        <PageDefault
            imageSrc={EditaisImg}
            imageAlt="Imagem Noticias"
            title="Form Noticias"
            description="Descrição sobre a página"
        >
            <FormNoticiasContainer>
               <h1>Form Noticias</h1>
            </FormNoticiasContainer>
        </PageDefault>
    );
}