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
                            <label htmlFor="uploadImage">
                                <input id="uploadImage" type="file" alt="Submit" 
                                    className="img-input" name="foto"
                                    accept="image/*"
                                ></input>
                            </label>
                            
                            
                            <div className="row-one-input">
                                <div className="row-one-left">
                                    <p className="title-area">Nome</p>
                                    <input type="text" className="input-left-one"/>
                                </div>
                                <br/>
                                <div className="row-one-right">
                                    <p className="title-area">Sobrenome</p>
                                    <input type="text" className="input-right-one"/>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="row-two">
                            <div className="row-two-left">
                                <p className="title-area" >E-mail</p>
                                <input type="text" className="input-left-two" placeholder="example@hotmail.com"/>
                            </div>
                            <br/>
                            <div className="row-two-right">
                                <p className="title-area" >Whatsapp</p>
                                <input type="text" className="input-right-two" placeholder="(__)_____-____"/>
                            </div>
                            <br/>
                        </div>
                        <div className="row-three">
                            <p className="title-area" >Bio (max 300 caracteres)</p><br/>
                            <textarea maxLength={300}></textarea>
                        </div>
                        <div className="row-four">
                            <div className="row-four-title">
                                <p className="rt-left">Áreas de interesse</p>
                                <p className="rt-right">+Área de interesse</p>
                            </div>
                            <hr className="line"/>
                            <p className="title-area">Área de interesse</p><br/>
                            <input type="text"/>
                        </div>
                        <div className="row-five">
                            <div className="row-five-title">
                                <p className="rt-left">Publicações</p>
                                <p className="rt-right">+Publicação</p>
                            </div>
                            <br/>
                            <hr className="line"/>
                            <br/>
                            <div className="row-five-title">
                                <p className="title-area-new">No formato ABNT</p><br/>
                                <p className="title-area">No formato ABNT</p><br/>
                                <p className="title-area ta-new">Ano</p><br/>
                            </div>
                            <div className="row-five-input">
                                <textarea></textarea>
                                <p className="title-area-new">Ano</p>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="row-six">
                            <div className="row-six-title">
                                <p className="rt-left">Projetos</p>
                                <p className="rt-right">+Projeto</p>
                            </div>
                            <br/>
                            <hr className="line"/>
                            <br/>
                            <div className="row-six-title">
                                <p className="title-area">Titulo</p><br/>
                                <p className="title-area">Ano</p><br/>
                            </div>
                            <div className="row-six-input">
                                <input type="text" className="rsi-left" />
                                <input type="text" className="rsi-right" />
                            </div>
                            <br/>
                            <p className="title-area" >Descrição (max. 300 caracteres</p>
                            <br/>
                            <textarea className="row-six-textarea" maxLength={300}></textarea>
                        </div>
                        <button className="row-six-btn">Enviar</button>

                    </div>
                </div>
            </div>
         </PageDefault>
    );
}