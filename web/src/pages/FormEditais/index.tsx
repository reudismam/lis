import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/FormEditais/formeditais.svg';
import InputImg from '../../assets/images/FormEditais/inputImg.png';

const FormEditaisContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
`
const Title = styled.h1`
    color: var(--blue1);
    margin-bottom: 20px;
`
const TitleInput = styled.h2`
    color: var(--color-pagina-texto);
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: auto;
    font-weight: normal;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    font-size: 1.4rem;
    border-radius: 8px;
    border: none;
`
const TextArea = styled.textarea`
    padding: 10px;
    max-width: 100%;
    min-width: 100%;
    min-height: 300px;
    max-height: 500px;
    border-radius: 8px;
    border: none;
`
const Button = styled(Link)`
    width: 150px;
    height: 40px;
    border-radius: 8px;
    color: var(--color-botao-texto);
    background-color: var(--color-pagina-botao);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-top: 20px;
`
const Imagem = styled.div`
    margin-right: auto;
    cursor: pointer;
    img{
        min-width: 250px;
        max-width: 350px;
        min-height: 250px;
        max-height: 350px;
    }
`
export default function FormEditais() {
    return (
        <PageDefault
            imageSrc={EditaisImg}
            imageAlt="Imagem do Formulário para Editais"
            title="Editais"
            description="Descrição sobre a página"
        >
            <FormEditaisContainer>
                <Title>Titulo Alternativo</Title>
                <TitleInput>Título</TitleInput>
                <Input />
                <TitleInput>Descrição</TitleInput>
                <TextArea />
                <TitleInput>Adicione uma imagem</TitleInput>
                <Imagem>
                    <img src={InputImg} alt="Ícone"/>
                </Imagem>
                <Button to="/editais">Publicar Notícia</Button>
            </FormEditaisContainer>
        </PageDefault>
    );
}