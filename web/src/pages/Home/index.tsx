import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import HomeImg from './img/inicio.png'

export default function Home() {

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
            <div className="home">
            <div className="home-top">
                    <div className="home-text" ref={Animation}>
                        <h1>Somos apaixonados por inovação e <br/>fazemos disso nosso trabalho</h1><br/>
                        <button className="projetos-btn">Projetos</button>
                    </div><br/>
                    <img alt="home imagem" className="img-home" src={HomeImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}