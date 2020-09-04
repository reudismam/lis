import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import discentes from './img/discentes.png';
import './styles.css';

export default function Docente() {
    const Animation = useRef(null)
    useEffect(() => {
        gsap.from(Animation.current, {
            x: -30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })

    const Animation2 = useRef(null)
    useEffect(() => {
        gsap.from(Animation2.current, {
            x: 30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })
    return (
        <PageDefault>
            <div className="discentes">
                <div className="discentes-top">
                    <div className="discentes-text" ref={Animation}>
                        <h1>Esses são os discentes</h1><br />
                        <p>Nossa lista de discentes comprometidos com a inovação</p>
                    </div><br />
                    <img alt="discentes imagem" className="img-discentes" src={discentes} ref={Animation2} />
                </div>
            </div>
        </PageDefault>
    );
}