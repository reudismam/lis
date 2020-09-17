import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import LoginImg from '../../assets/images/Login/login.svg';
import login from './img/login.png';
import group from './img/Group.png';
import mail from './img/mail.png';
import local from './img/local.png';
import ig from './img/ig.png';
import tt from './img/tt.png';
import fb from './img/fb.png';
import ln from './img/ln.png';
import './styles.css';

export default function Login() {
    const Animation = useRef(null)
    useEffect(() => {
        gsap.from(Animation.current, {
            x: -30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    },)

    const Animation2 = useRef(null)
    useEffect(() => {
        gsap.from(Animation2.current, {
            x: 30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    },)
    return (
        <PageDefault
            imageSrc={LoginImg}
            imageAlt="Imagem Login"
            title="Faça login"
            description="Deixe seu feedback para melhorarmos cada vez mais!"
        >
            <div>
                <div className="container">
                    <div className="left">
                        <h1>Seja bem vindo ao LIS</h1>
                        <div className="info">
                            <div className="info-item">
                                <div>
                                    <img src={group} alt=""/>
                                </div>
                                <div>
                                    <p>sitelisexample.com.br</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={mail} alt=""/>
                                <p>sitelisexample@.com.br</p>
                            </div>
                            <div className="info-item">
                                <img src={local} alt=""/>
                                <p>Endereço: xxxxxx-xxxxx, 00000000</p>
                            </div>
                        </div>
                        <div className="social">
                            <img src={ig} alt=""/>
                            <img src={tt} alt=""/>
                            <img src={fb} alt=""/>
                            <img src={ln} alt=""/>
                        </div>
                    </div>
                    <hr className="ln"/>
                    <div className="right">
                        <div className="get">
                            <div className="get-input">
                                <p>Nome de usuário</p>
                                <input type="text"/>
                            </div>
                            <div className="get-input">
                                <p>Senha</p>
                                <input type="password"/>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="btn-login">
                                <button>Login</button>
                            </div>
                            <div className="btn-gg">
                                <button>Entrar com o Google</button>
                            </div>
                            <div className="btn-fb">
                                <button>Entrar com o Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </PageDefault>
    );
}