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
        border-bottom: 1px solid var(--color-descriptions);
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
    width: 100%;
    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`
const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 10px;
`
const Lista = styled.ul`
    text-align: center;
    list-style: none;
    font-size: 1rem;
    
    li{
        line-height: 1.6;
    }
    @media(min-width: 768px){
        text-align: left;
        word-wrap:  normal;
        min-width: 200px;
        max-width: 300px;
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
        color: var(--color-descriptions);
    }
`
const Icon = styled.span`
    font-size: 1.2rem;
    color: var(--color-rodape-texto);
    margin-right: 10px;
`
const Icons = styled.span`
    font-size: 2.5rem;
    color: var(--color-rodape-texto);
    margin-right: 15px;
`
const Email = styled.a`
    color: var(--color-rodape-texto);
    text-decoration: none;
    
    :hover {
        color: var(--color-descriptions);
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
                        Laboratório de inovações em <i>Software</i>
                    </Title>
                    <Lista>
                        <Link href="https://www.instagram.com/lis.ufersa">
                            <Icons>
                                <FiInstagram />
                            </Icons>
                        </Link>
                        <Link href="https://www.twitter.com/lis_ufersa">
                            <Icons>
                                <FaTwitter />
                            </Icons>
                        </Link>
                        <Link href="https://www.facebook.com/lis.ufersa">
                            <Icons>
                                <FaFacebookF />
                            </Icons>
                        </Link>
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
            <Direitos>
                @todos os direitos reservados
            </Direitos>
        </Content>
    );
}