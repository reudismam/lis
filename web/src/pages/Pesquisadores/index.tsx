import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import PesquisadoresImg from './img/pesquisadores.png'

export default function Pesquisadores() {

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
            <div className="pesquisadores">
                <div className="pesquisadores-top">
                    <div className="pesquisadores-text" ref={Animation}>
                        <h1>Muitas pessoas tornam o nosso projeto possível</h1><br/>
                        <p>Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente</p>
                    </div><br/>
                    <img alt="pesquisadores imagem" className="img-pesquisadores" src={PesquisadoresImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}