import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import PublicacoesImg from '../../assets/images/Publicacoes/publicacoes.svg';

const PublicacoesContainer = styled.div`
    padding: 0 10px 20px 10px;
    width: 100%;
    height: 100%;

    @media(min-width: 768px){
        padding: 0 50px 20px 50px;
    }

    @media(min-width: 1280px){
        padding: 0 100px 20px 100px;
    }
`
const Ano = styled.h1`
    color: var(--color-navibar);
    margin-top: 40px;
    margin-bottom: 10px;
`
const Description = styled.p`
    color: var(--color-descriptions);
`
export default function Publicacoes() {
    return (
        <PageDefault
            imageSrc={PublicacoesImg}
            imageAlt="Imagem Publicacoes"
            title="Publicações"
            description="Veja suas atribuições no momento, deixe seus dados sempre atualizados!"
        >
            <PublicacoesContainer>
                <Ano>2020</Ano>
                <Description>SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.</Description>
                <br/>
                <Description>COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.</Description>
                <Ano>2019</Ano>
                <Description>SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.</Description>
                <br/>
                <Description>COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.</Description>
                <Ano>2018</Ano>
                <Description>SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.</Description>
                <br/>
                <Description>COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.</Description>
            </PublicacoesContainer>  
        </PageDefault>
    );
}