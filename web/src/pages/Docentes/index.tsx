import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import docentes from './img/docentes.png';
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
            <div className="doscentes">
                <div className="doscentes-top">
                    <div className="doscentes-text" ref={Animation}>
                        <h1>Esses são os docentes</h1><br />
                        <p>Nossa lista de docentes comprometidos com a inovação</p>
                    </div><br />
                    <img alt="doscentes imagem" className="img-doscentes" src={docentes} ref={Animation2} />
                </div>
            </div>
        </PageDefault>
    );
}