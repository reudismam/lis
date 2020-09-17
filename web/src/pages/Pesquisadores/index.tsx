import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import { Link } from "react-router-dom";
import PageDefault from '../DefaultPage';
import './styles.css';
import PesquisadoresImg from '../../assets/images/Pesquisadores/pesquisadores.svg';
import Docentes from './img/docente.png';
import Discentes from './img/discente.png';

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
        <PageDefault
            imageSrc={PesquisadoresImg}
            imageAlt="Imagem Pesquisadores"
            title="Muitas pessoas tornam o nosso projeto possível"
            description="Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente"
        > 
            <div className="pesquisadores">
                <div className="pesquisadores-top">
                    <div className="pesquisadores-text" ref={Animation}>
                        <h1>Muitas pessoas tornam o nosso projeto possível</h1><br/>
                        <p>Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente</p>
                    </div><br/>
                    <img alt="pesquisadores imagem" className="img-pesquisadores" src={PesquisadoresImg} ref={Animation2}/>
                </div>
                <br/>
                <div className="pesquisadores-container">
                    <Link to="/docentes" className="link">
                        <div className="pesquisadores-card">
                            <img src={Docentes} alt="docentes" className="imgPesquisador" />
                            <br/>
                            <div>
                                <h3>Docentes</h3><br/>
                                <p>Listas dos pesquisadores do LIS e um resumão de suas principais funções no grupo, trabalhos e projetos. </p>
                            </div>
                        </div>
                    </Link>
                    <br/>
                    <Link to="/discentes" className="link">
                        <div className="pesquisadores-card">
                            <img src={Discentes} alt="discentes" className="imgPesquisador" />
                            <br/>
                            <div>
                                <h3>Discentes</h3><br/>
                                <p>Listas dos pesquisadores do LIS e um resumão de suas principais funções no grupo, trabalhos e projetos. </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="pesquisadores-btn">
                    <button>Faça parte do nosso time</button>
                </div>
            </div>
         </PageDefault>
    );
}

export default Pesquisadores