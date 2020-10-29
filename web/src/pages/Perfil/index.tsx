import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import EditaisImg from '../../assets/images/Editais/editais.svg';
import UserImg from './User.png';
import { SiMailDotRu } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { BiBookHeart, BiUserCircle } from 'react-icons/bi';
import { TiBook } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { FaAlignLeft, FaBookOpen } from 'react-icons/fa';

const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5% 0;

    @media(min-width: 700px){
        flex-direction: row;
    }
`
const Card = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 2px solid var(--color-navibar);
    @media (min-width: 700px){
        max-width: 55%;
        h2{
            font-size: 1.2rem;
        }
    }
    @media (min-width: 1000px){
        max-width: 45%;
        h2{
            font-size: 1.2rem;
        }
    }
`
const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    img{
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
    h2{
        margin: 5px 0;
    }

    @media (min-width: 700px){
        flex-direction: row;
    }
    @media (min-width: 1000px){
        img{
            width: 150px;
            height: 150px;
            border-radius: 100px;
        }
    }
`
const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--color-pagina-texto);
`
const ContatoIcon = styled.div`
    margin-right: 5px;
`
const Contato = styled.div`
    display: flex;
`
const ContatoInfo = styled.p`
    width: 80%;
`
const Bio = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
    color: var(--color-pagina-texto);
    h2{
        margin-bottom: 5px;
    }
`
const ButtonPerfil = styled(Link)`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 8px;
    background-color: var(--color-navibar);
    color: var(--color-botao-texto);
    margin-bottom: 20px;
`
const Sobre = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    @media(min-width: 700px){
        margin-top: 0px;
        padding-left: 10px;
    }
`
const Item = styled.div`
    margin-bottom: 50px;
    @media (min-width: 1000px){
        margin-bottom: 30px;
    }
`
const TitleTop = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    h2{
        font-size: 1.2rem;
        margin-left: 5px;
        color: var(--color-pagina-texto);
    }
    @media (min-width: 1000px){
        h2{
            font-size: 1.5rem;
        }
    }
`
const TitleIcon = styled.p`
    font-size: 1.2rem;
    color: var(--color-navibar);
    @media (min-width: 1000px){
        font-size: 1.5rem;
    }
`
const Editar = styled.div`
    display: flex;
    cursor: pointer;
    h2{
        font-size: 1.2rem;
        color: var(--color-pagina-texto);
    }
    @media (min-width: 1000px){
        h2{
            font-size: 1.5rem;
        }
    }
`
const Lista = styled.ul`
    margin-top: 10px;

    li{
        list-style: none;
        margin-left: 20px;
        margin-bottom: 5px;
        font-size: 0.8rem;
        color: var(--color-pagina-texto);
    }
    @media (min-width: 1000px){
        li{
            font-size: 1rem;
            margin-left: 25px;
        }
    }
`
const Post = styled.div`
    width: 100%;
`
const Content = styled.p`
    color: var(--color-pagina-texto);
    margin-top: 20px;
`
const Linha = styled.hr`
    width: 90%;
    height: 1px;
    margin: 30px auto;
    border: 1px solid var(--color-pagina-texto);
`
const ButtonPost = styled(Link)`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 8px;
    background-color: var(--blue1);
    color: var(--color-botao-texto);
    margin-top: 20px;
    margin-bottom: 20px;
`
const TitleProject = styled.h2`
    font-size: 1rem;
    margin: 10px 0;
    color: var(--color-pagina-texto);
`
const ContentProject = styled.div`
    @media (min-width: 700px){
        display: flex;
    }
`
const Description = styled.p`
    width: 65%;
    font-size: 1rem;
    color: var(--color-pagina-texto);
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
                <Info>
                    <Card>
                        <User>
                            <img src={UserImg} alt="" />
                            <UserInfo>
                                <h2>Reudismam Rolim de Sousa</h2>
                                <Contato>
                                    <ContatoIcon><SiMailDotRu /></ContatoIcon>
                                    <ContatoInfo>reudismanrolim.ufersa@hotmail</ContatoInfo>
                                </Contato>
                                <Contato>
                                    <ContatoIcon><AiOutlinePhone /></ContatoIcon>
                                    <ContatoInfo>55 9 0000 - 0000</ContatoInfo>
                                </Contato>
                            </UserInfo>
                        </User>
                        <Bio>
                            <h2>Biografia</h2>
                            <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro Universitário Ler mais</p>
                        </Bio>
                        <ButtonPerfil to="">Editar Perfil</ButtonPerfil>
                    </Card>
                    <Sobre>
                        <Item>
                            <TitleTop>
                                <Title>
                                    <TitleIcon><BiUserCircle /></TitleIcon>
                                    <h2>Funções</h2>
                                </Title>
                                <Editar>
                                    <TitleIcon><BsPencil /></TitleIcon>
                                    <h2>Editar</h2>
                                </Editar>
                            </TitleTop>
                            <Lista>
                                <li>Líder de Projeto</li>
                                <li>Coordenador do Curso - Tecnologia da Informação</li>
                            </Lista>
                        </Item>
                        <Item>
                            <TitleTop>
                                <Title>
                                    <TitleIcon><TiBook /></TitleIcon>
                                    <h2>Cursos ministrados</h2>
                                </Title>
                                <Editar>
                                    <TitleIcon><BsPencil /></TitleIcon>
                                    <h2>Editar</h2>
                                </Editar>
                            </TitleTop>
                            <Lista>
                                <li>Algoritmos e Estruturas de Dados I</li>
                                <li>Algoritmos e Estruturas de Dados II</li>
                                <li>Programação Orientada a Objetos</li>
                            </Lista>
                        </Item>
                        <Item>
                            <TitleTop>
                                <Title>
                                    <TitleIcon><BiBookHeart /></TitleIcon>
                                    <h2>Áreas de interesse</h2>
                                </Title>
                                <Editar>
                                    <TitleIcon><BsPencil /></TitleIcon>
                                    <h2>Editar</h2>
                                </Editar>
                            </TitleTop>
                            <Lista>
                                <li>Gestão de projetos</li>
                                <li>Engenharia de software</li>
                                <li>Línguagem de programação</li>
                            </Lista>
                        </Item>
                    </Sobre>
                </Info>
                <Post>
                    <Item>
                        <TitleTop>
                            <Title>
                                <TitleIcon><FaBookOpen /></TitleIcon>
                                <h2>Publicações</h2>
                            </Title>
                            <Editar>
                                <TitleIcon><BsPencil /></TitleIcon>
                                <h2>Editar</h2>
                            </Editar>
                        </TitleTop>
                        <Content>
                            SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.
                        </Content>
                        <Content>
                            COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.
                        </Content>
                        <Linha />
                        <Content>
                            SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.
                        </Content>
                        <Content>
                            COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.
                        </Content>
                        <ButtonPost to="">Carregar mais</ButtonPost>
                    </Item>
                    <Item>
                        <TitleTop>
                            <Title>
                                <TitleIcon><FaAlignLeft /></TitleIcon>
                                <h2>Projetos</h2>
                            </Title>
                            <Editar>
                                <TitleIcon><BsPencil /></TitleIcon>
                                <h2>Editar</h2>
                            </Editar>
                        </TitleTop>

                        <TitleProject>Imersão BTI</TitleProject>
                        <ContentProject>
                            <Description>
                                Descrição: As olimpíadas de programação são ferramentas importantes para motivação dos alunos para o aprendizado de programação. Isso pode ser explicado pelo fato dessas competições serem, frequentemente, monitoradas por grandes empresas, voltadas para o desenvolvimento de tecnologia, tais como Google, Facebook e Microsoft, para a seleção de talentos de para as suas instituições. Dessa forma, os alunos são naturalmente inspirados a se superarem, em busca de uma oportunidade de trabalho nessas companhias. Além de desenvolver talentos, as olimpíadas aumentam
                            </Description>
                        </ContentProject>
                        <ButtonPost to="">Carregar mais</ButtonPost>
                    </Item>
                </Post>
            </PerfilContainer>
        </PageDefault>
    );
}