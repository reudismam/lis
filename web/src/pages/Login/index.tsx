import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import LoginImg from '../../assets/images/Login/login.svg';
import { AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import login from './img/login.png';
import group from './img/Group.png';
import mail from './img/mail.png';
import local from './img/local.png';
import ig from './img/ig.png';
import tt from './img/tt.png';
import fb from './img/fb.png';
import ln from './img/ln.png';
import './styles.css';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        flex-direction: row;

    }
`
const Left = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px){
        height: 300px;
        align-items: initial;
        border-right: 1px solid var(--blue1);
        padding: 10px;
    }
`
const Title = styled.h1`
    font-size: 2rem;
    color: var(--blue1);
`
const Social = styled.div`
    margin-top: 40px;
    font-size: 1.4rem;
    display: none;
    flex-direction: column;
    @media(min-width: 768px){
        display: flex;
        margin-bottom: auto;
    }
`
const Social2 = styled.div`
    margin-bottom: 20px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(min-width: 768px){
        display: none;
    }
`
const Item = styled.div`
    display: flex;
    color: var(--blue1);
    margin-bottom: 10px;
    p{
        margin-left: 10px;
        color: var(--color-pagina-textoazul);
    }
    a{
        margin-left: 10px;
        color: var(--color-pagina-textoazul);
        text-decoration: none;
    }
`
const Item2 = styled.div`
    display: flex;
    color: var(--blue1);
    margin-bottom: 10px;
    p{
        margin-left: 10px;
        color: var(--color-pagina-textoazul);
    }
    a{
        margin-left: 10px;
        color: var(--color-pagina-textoazul);
        text-decoration: none;
    }
`
const Right = styled.div`
    width: 100%;
    height: 400px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .login-input{
        background-color: var(--blue1);
    }
    .login-google{
        background-color: #E33D3D;
    }
    .login-facebook{
        background-color: #2B4CB8;
    }
    @media(min-width: 768px){
        padding: 50px;
    }
`
const TitleInput = styled.p`
    margin-right: auto;
    margin-bottom: 5px;
    color: var(--color-pagina-texto);
`
const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
    font-size: 1.2rem;
    @media(min-width: 768px){
        min-width: 300px;
        max-width: 400px;
        margin-right: auto;
    }
`
const Button = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-botao-texto);
    width: 100%;
    height: 45px;
    border-radius: 8px;
    margin-bottom: 10px;
    
    @media(min-width: 768px){
        min-width: 300px;
        max-width: 400px;
        margin-right: auto;
    }
`
export default function Login() {
    
    return (
        <PageDefault
            imageSrc={LoginImg}
            imageAlt="Imagem Login"
            title="Faça login"
            description="Deixe seu feedback para melhorarmos cada vez mais!"
        >
        <LoginContainer>
            <Left>
                <Title>Seja bem vindo ao LIS</Title>
                <Social>
                    <Item>
                        <AiOutlineGlobal /> <p>sitelisexample.com.br</p>
                    </Item>
                    <Item>
                        <AiOutlineMail /> <a href="mailto: sitelisexample@.com.br">sitelisexample@.com.br</a>
                    </Item>
                    <Item>
                        <GoLocation /> <p>Endereço: xxxxxx-xxxxx, 00000000</p>
                    </Item>
                    
                </Social>
            </Left>
            <Right>
                <TitleInput>Nome de usuário</TitleInput>
                <Input type="email"></Input>
                <TitleInput>Senha</TitleInput>
                <Input type="password"></Input>
                <Button to="/home" className="login-input">Login</Button>
                <Button to="/home" className="login-google">Entrar com o google</Button>
                <Button to="/home" className="login-facebook">Entrar com o Facebook</Button>
            </Right>
            <Social2>
                <Item2>
                    <AiOutlineGlobal /> <p>sitelisexample.com.br</p>
                </Item2>
                <Item2>
                    <AiOutlineMail /> <a href="mailto: sitelisexample@.com.br">sitelisexample@.com.br</a>
                </Item2>
                <Item2>
                    <GoLocation /> <p>Endereço: xxxxxx-xxxxx, 00000000</p>
                </Item2>
                
            </Social2>
        </LoginContainer>
        </PageDefault>
    );
}