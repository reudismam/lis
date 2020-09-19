import React from 'react';
import styled from 'styled-components';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
const FooterData = styled.div`
    width: 100%;
    margin-bottom: 10px;
    height: 180px;
    text-align: center;
    color: var(--color-rodape-texto);
    padding: 10px 0;
    @media(min-width: 768px) {
        width: 30%;
        text-align: left;
    }

`
const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${FooterData} {
        border-bottom: 1px solid var(--color-descriptoins);
    }
    
    @media(min-width: 768px) {
        width: 90%;
        margin-top: 30px;
        ${FooterData} {
            border: none;
        }
    }
`
const Info = styled.div`
    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`
const Title = styled.h1`
    font-size: 1.6rem;
    margin-bottom: 10px;
`
const Lista = styled.ul`
    text-align: center;
    list-style: none;
    font-size: 1rem;
    width: 350px;
    li{
        line-height: 1.6;
    }
    @media(min-width: 768px){
        text-align: left;
    }
    
`
const SocialNetworks = styled.ul`
    list-style: none;
    width: 70%;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`

const Link = styled.a`
    text-decoration: none;
    color: var(--color-rodape-texto);
    font-size: 1.2rem;
    margin-left: 2px;
    
    :hover {
        color: var(--color-descriptoins);
    }
`
const Icon = styled.span`
    font-size: 1.2rem;
    color: var(--color-rodape-texto);
    margin-right: 10px;
`
const Email = styled.a`
    color: var(--color-rodape-texto);
    text-decoration: none;
    
    :hover {
        color: var(--color-descriptoins);
    }
`
const Direitos = styled.p`
    color: var(--color-rodape-texto);
    font-size: 1rem;
    height: 50px;
`

export default function FooterContent() {
    return (
        <Content>
            <Info>
                <FooterData>
                    <Title>
                        Nossos Parceiros
                    </Title>
                    <Lista>
                        <li>Universidade Federal Rural do Semi-Árido</li>
                        <li>Bacharelado em Tecnologia da Informação</li>
                        <li>Engenharia de <i>Software</i></li>
                    </Lista>
                </FooterData>
                <FooterData>
                    <Title>
                        Desenvolvedores
                    </Title>
                    <Lista>
                        <li>Renan Santana</li>
                        <li>Fernando Dutra</li>
                        <li>Emanuel Bruno</li>
                        <li>Reudismam Rolim</li>
                    </Lista>
                </FooterData>
                <FooterData>
                    <Title>
                        Informações
                    </Title>
                    <Lista>
                        <li>
                            <Icon>
                                <GoLocation />
                            </Icon>
                            Rodovia BR-226, s/n, Pau dos Ferros-RN, 59900-000
                        </li>
                        <li>
                            <Icon>
                                <FiMail />
                            </Icon>
                            <Email href="mailto:lis.ufersa@gmail.com">
                                lis.ufersa@gmail.com
                            </Email>
                        </li>
                    </Lista>
                </FooterData>
            </Info>
            <SocialNetworks>
                <li>
                    <Icon>
                        <FiInstagram />
                    </Icon>
                    <Link href="https://www.instagram.com/lis.ufersa">lis.ufersa</Link>
                </li>
                <li>
                    <Icon>
                        <FaTwitter />
                    </Icon>
                    <Link href="https://www.twitter.com/lis_ufersa">lis_ufersa</Link>
                </li>
                <li>
                    <Icon>
                        <FaFacebookF />
                    </Icon>
                    <Link href="https://www.facebook.com/lis.ufersa">/lis.ufersa</Link>
                </li>
            </SocialNetworks>
            <Direitos>
                @todos os direitos reservados
            </Direitos>
        </Content>
    );
}