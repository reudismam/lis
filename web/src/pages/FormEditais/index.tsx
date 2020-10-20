import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/Editais/editais.svg';

const FormEditaisContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function FormEditais() {
    return (
        <PageDefault
            imageSrc={EditaisImg}
            imageAlt="Imagem Editais"
            title="Editais"
            description="Descrição sobre a página"
        >
            <FormEditaisContainer>
               <h1>Form Editais</h1>
            </FormEditaisContainer>
        </PageDefault>
    );
}