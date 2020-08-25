import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import ProjetoImg from './img/projeto.png'

export default function Projeto() {

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
            <div className="projeto">
                <div className="projeto-top">
                    <div className="projeto-text" ref={Animation}>
                        <h1>Veja alguns de nossos projetos!</h1><br/>
                        <p>Buscamos te deixar bem interado sobre o assunto, aqui você pode acompanhar o que estamos fazendo ...</p>
                    </div><br/>
                    <img alt="projeto imagem" className="img-projeto" src={ProjetoImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}