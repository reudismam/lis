import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import ContatoImg from './img/contato.png'

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
        <PageDefault> 
            <div className="contato">
                <div className="contato-top">
                    <div className="contato-text" ref={Animation}>
                        <h1>Vamos nos conhecer um pouco mais</h1><br/>
                        <p>Deixe seu feedback para melhorarmos cada vez mais!</p>
                    </div><br/>
                    <img alt="contato imagem" className="img-contato" src={ContatoImg} ref={Animation2}/>
                </div>
                <div className="div-1">
                    <div className="div-2">
                        <div className="subdiv-left">
                         <p id= "tittle-1l">Entre em contato conosco!</p>
                          <p id="corpo-1l">
                            Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra  sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque adipiscing commodo  elit at imperdiet. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.</p>
                          <p id="tittle-2l">LIS</p>
                          <p id="corpo-2l">
                            Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque 
                           </p>
                           <div className="contatos">
                            <div className="contatos-item">
                                <div>
                                    <img src={group} alt=""/>
                                </div>
                                <div>
                                    <p>sitelisexample.com.br</p>
                                </div>
                            </div>
                            <div className="contatos-item">
                                <img src={mail} alt=""/>
                                <p>sitelisexample@.com.br</p>
                            </div>
                            <div className="contatos-item">
                                <img src={local} alt=""/>
                                <p>Endereço: xxxxxx-xxxxx, 00000000</p>
                            </div>
                        </div>
                          <div className="sociale">
                            <img src={ig} alt=""/>
                            <img src={tt} alt=""/>
                            <img src={fb} alt=""/>
                            <img src={ln} alt=""/>
                            </div> 
                          </div>
                        
                          <hr className="lmid"/>
                        <div className="subdiv-right">
                        <div id="tittle-1r">Ou envie uma mensagem</div>
                        <div className="get-contatos">
                            <p>Nome</p>
                            <input className="input-ne"type="text"/>
                        </div>
                        <div className="get-contatos">
                            <p>Email</p>
                            <input className="input-ne" type="text"/>
                        </div>
                        <div className="get-contatos">
                            <p>Bio (max. 300 caracteres)</p>
                            <textarea className="texto-t" maxLength={300}></textarea>
                            <button className="btn-e">Enviar</button>
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
            </div>
         </PageDefault>
    );
}