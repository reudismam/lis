import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import CriarContaImg from './img/criar-conta.png'

export default function Criarconta() {

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
            <div className="criar-conta">
                <div className="criar-conta-top">
                    <div className="criar-conta-text" ref={Animation}>
                        <h1>Quase tudo pronto para se tornar <br/>um membro do grupo</h1><br/>
                        <p>Insira seus dados cadastrais nos campos abaixo.</p>
                    </div><br/>
                    <img alt="criar-conta imagem" className="img-criar-conta" src={CriarContaImg} ref={Animation2}/>
                </div>
                
                <div className="criar-conta-cad">
                    <div className="criar-conta-content">
                        <h3 className="tInicial">Seus dados</h3><br/>
                        
                        <div className="row-one">
                        <input type="image" src="" alt="Submit" width="178" height="171"className="img-input"></input>
                            <div className="row-one-input">
                            <div className="row-one-left">
                                <p>Nome</p>
                                <input type="text" className="input-left-one"/>
                            </div>
                            <br/>
                            <div className="row-one-right">
                                <p>Sobrenome</p>
                                <input type="text" className="input-right-one"/>
                            </div>
                            </div>
                            <br/>
                        </div>

                        <div className="row-two">
                            <div className="row-two-left">
                                <p>E-mail</p>
                                <input type="text" className="input-left-two" placeholder="example@hotmail.com"/>
                            </div>
                            <br/>
                            <div className="row-two-right">
                                <p>Whatsapp</p>
                                <input type="text" className="input-right-two" placeholder="_______-"/>
                            </div>
                            <br/>
                        </div>

                        <div className="row-three">
                            <p>Bio (max 300 caracteres)</p><br/>
                            <textarea></textarea>
                        </div>


                    </div>
                </div>
            </div>
         </PageDefault>
    );
}