import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/Editais/editais.svg';

const FormPortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function FormPortifolio() {
    return (
        <PageDefault
            imageSrc={EditaisImg}
            imageAlt="Imagem Portfolio"
            title="Portfolio"
            description="Descrição sobre a página"
        >
            <FormPortfolioContainer>
               <h1>Form Portfolio</h1>
            </FormPortfolioContainer>
        </PageDefault>
    );
}