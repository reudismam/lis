import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import PublicacoesImg from './img/publicacoes.png'

export default function Publicacoes() {

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
            <div className="publicacoes">
                <div className="publicacoes-top">
                    <div className="publicacoes-text" ref={Animation}>
                        <h1>Aqui estão as publicações</h1><br/>
                        <p>Veja suas atribuições no momento, deixe seus dados sempre atualizados!</p>
                    </div><br/>
                    <img alt="publicações imagem" className="img-publicacoes" src={PublicacoesImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}