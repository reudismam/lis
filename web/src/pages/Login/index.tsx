import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import LoginImg from '../../assets/images/Login/login.svg';
import { AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import ig from './img/ig.png';
import tt from './img/tt.png';
import fb from './img/fb.png';
import ln from './img/ln.png';
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
        height: 350px;
        align-items: initial;
        border-right: 1px solid var(--blue1);
        padding: 0px;
    }
    @media(min-width: 1000px){
        padding-left: 60px;
    }
`
const Title = styled.h1`
    font-size: 2rem;
    color: var(--blue1);
    @media(max-width: 768px){
        margin-top: 20px;
        text-align: center;
    }
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
        height: 500px;
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
    width: 100%;
    height: 36px;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-botao-texto);
    border-radius: 8px;
    margin-bottom: 20px;
    
    @media(min-width: 768px){
        min-width: 300px;
        max-width: 400px;
        margin-right: auto;
        height: 50px;
        font-size: 1.5rem;
    }
`
const Icons = styled.div`
    width: 60%;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    @media(min-width: 1000px){
        width: 50%;
    }
`
const Icons2 = styled.div`
    width: 80%;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
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
                        <Icons>
                            <img src={ig} alt="instagram" />
                            <img src={tt} alt="twitter" />
                            <img src={fb} alt="facebook" />
                            <img src={ln} alt="linkedin" />
                        </Icons>
                    </Social>
                </Left>
                <Right>
                    <TitleInput>Nome de usuário</TitleInput>
                    <Input type="email"></Input>
                    <TitleInput>Senha</TitleInput>
                    <Input type="password"></Input>
                    <Button to="/" className="login-input">Login</Button>
                    <Button to="/" className="login-google">Entrar com o google</Button>
                    <Button to="/" className="login-facebook">Entrar com o Facebook</Button>
                </Right>
                <Social2>
                    <Icons2>
                        <img src={ig} alt="instagram" />
                        <img src={tt} alt="twitter" />
                        <img src={fb} alt="facebook" />
                        <img src={ln} alt="linkedin" />
                    </Icons2>
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