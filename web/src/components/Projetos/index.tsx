import React from 'react';
import styled from 'styled-components';
import {PROJETOS} from '../../Data/projetos';
import Card from '../ProjetosCard';

const ProjetList = styled.section`
    margin-top: 20px;
    line-height: 1.6;

    @media(min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`
const ProjetoName = styled.h2`
    color: var(--color-descriptions);
    margin: 10px 0;
    font-weight: normal;
`
const Description = styled.p`
    font-size: 1.2rem;
    color: var(--color-descriptions);
    height: 150px;
    overflow: hidden;
`
const Image = styled.img`

`
export default function Projetos(){
    return(
        <ProjetList>
            {
                PROJETOS.filter(p => p.featured == true).map((projeto) => {
                    return(
                        <Card key={projeto.name}>
                            <Image src={require(`../../assets/${projeto.image}`)} alt={projeto.name} />
                            <ProjetoName>
                                {projeto.name}
                            </ProjetoName>
                            <Description>
                                {projeto.description}
                            </Description>
                        </Card>
                    );
                })
            }
        </ProjetList>
    );
}