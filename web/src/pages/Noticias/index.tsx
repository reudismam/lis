import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import NoticiaImg from './img/noticia.png'

export default function Noticias() {

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
            <div className="noticia">
            <div className="noticia-top">
                    <div className="noticia-text" ref={Animation}>
                        <h1>Acompanhe notícias da Universidade<br/> mais recentes</h1><br/>
                        <p>Buscamos de deixar bem informado com as notícias<br/> mais importantes atualizadas!</p>
                    </div><br/>
                    <img alt="noticia imagem" className="img-noticia" src={NoticiaImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}