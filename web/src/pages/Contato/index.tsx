import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import ContatoImg from './img/contato.png'

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
            </div>
         </PageDefault>
    );
}