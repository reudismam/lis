import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import PesquisadoresImg from './img/pesquisadores.png'

function Pesquisadores() {

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
                <br/>
                <div className="pesquisadores-center">
                    <div className="pesquisadores-docentes">
                        <img alt="docentes" className="docentes" />
                        <br/>
                        <h2>Docentes</h2><br/>
                        <p>Listas dos pesquisadores do LIS e um resumão de suas principais funções no grupo, trabalhos e projetos. </p>
                    </div>
                    <br/>
                    <div className="pesquisadores-discentes">
                        <img alt="discentes" className="discentes" />
                        <br/>
                        <h2>Discentes</h2><br/>
                        <p>Listas dos pesquisadores do LIS e um resumão de suas principais funções no grupo, trabalhos e projetos. </p>
                    </div>
                </div>
            </div>
         </PageDefault>
    );
}

export default Pesquisadores