import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import EditaisImg from './img/editais.png'

export default function Editais() {

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
            <div className="edital">
            <div className="edital-top">
                    <div className="edital-text" ref={Animation}>
                        <h1>Nossos editais</h1><br/>
                        <p>Acompanhe nossa postagens e fique por dentro do que<br/>
                        rola aqui no LIS, e claro que tem aquele toque de aprendizagem!!</p>
                    </div><br/>
                    <img alt="edital imagem" className="img-edital" src={EditaisImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}