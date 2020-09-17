import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import PageDefault from '../DefaultPage';
import './styles.css';
import ContatoImg from '../../assets/images/Contato/contato.svg';
import group from './img/Group.png';
import mail from './img/mail.png';
import local from './img/local.png';
import ig from './img/ig.png';
import tt from './img/tt.png';
import fb from './img/fb.png';
import ln from './img/ln.png';
export default function Contato() {

    const Animation = useRef(null)
    useEffect(() => {
        gsap.from(Animation.current, {
            x: -30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })

    const Animation2 = useRef(null)
    useEffect(() => {
        gsap.from(Animation2.current, {
            x: 30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })

    return (
        <PageDefault
            imageSrc={ContatoImg}
            imageAlt="Imagem Contato"
            title="Vamos nos conhecer um pouco mais"
            description="Deixe seu feedback para melhorarmos cada vez mais!"
        >
            <div className="contato">
                
                <div className="contato-page">
                    <div className="contato-container">
                        <div className="contato-left">
                            <div className="contato-infoTop">
                                <h1 className="contato-title">Entre em contato conosco!</h1>
                                <p>
                                    Id cursus metus aliquam eleifend mi in nulla posuere
                                    sollicitudin. Ut pharetra  sit amet aliquam id diam maecenas
                                    ultricies. Euismod quis viverra nibh cras pulvinar mattis.
                                    Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis
                                    ullamcorentesque adipiscing commodo  elit at imperdiet.
                                    Orci sagittis eu volutpat odio facilisis mauris sit amet
                                    massa.
                                </p>
                            </div>
                            <div className="contato-lis">
                                <h3>LIS</h3>
                                <p>
                                    Id cursus metus aliquam eleifend mi in
                                    nulla posuere sollicitudin. Ut pharetra sit
                                    amet aliquam id diam maecenas ultricies.
                                    Euismod quis viverra nibh cras pulvinar
                                    mattis. Amet nulla facilisi morbi tempus
                                    iaculis. Vestibulum mattis ullamcorentesque
                                </p>
                            </div>
                            <div className="contatos">
                                <div className="contatos-item">
                                    <div>
                                        <img src={group} alt="" />
                                    </div>
                                    <div>
                                        <p>sitelisexample.com.br</p>
                                    </div>
                                </div>
                                <div className="contatos-item">
                                    <div>
                                        <img src={mail} alt="" />
                                    </div>
                                    <div>
                                        <p>sitelisexample@.com.br</p>
                                    </div>
                                </div>
                                <div className="contatos-item">
                                    <div>
                                        <img src={local} alt="" />
                                    </div>
                                    <div>
                                        <p>Endereço: xxxxxx-xxxxx, 00000000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sociale">
                                <Link to=""><img src={ig} alt="" /></Link>
                                <Link to=""><img src={tt} alt="" /></Link>
                                <Link to=""><img src={fb} alt="" /></Link>
                                <Link to=""><img src={ln} alt="" /></Link>
                            </div>
                        </div>
                        <div className="contato-line">
                            <hr className="lmid" />
                        </div>
                        <div className="contato-right">
                            <div className="contato-msg">
                                <h2>Ou envie uma mensagem</h2>    
                            </div>
                            <div className="get-contatos">
                                <p>Nome</p>
                                <input type="text" />
                            </div>
                            <div className="get-contatos">
                                <p>Email</p>
                                <input type="text" />
                            </div>
                            <div className="get-contatos">
                                <p>Bio (max. 300 caracteres)</p>
                                <textarea maxLength={300}></textarea>
                                <button className="btn-e">Enviar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </PageDefault>
    );
}