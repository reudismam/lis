import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import PageDefault from '../DefaultPage';
import docentes from './img/docentes.png';
import docente1 from './img/docente1.png';
import docente2 from './img/docente2.png';
import docente3 from './img/docente3.png';
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
            <div>
                <div className="docentes">
                    <div className="docentes-top">
                        <div className="docentes-text" ref={Animation}>
                            <h1>Esses são os docentes</h1><br />
                            <p>Nossa lista de docentes comprometidos com a inovação</p>
                        </div><br />
                        <img alt="docentes imagem" className="img-docentes" src={docentes} ref={Animation2} />
                    </div>
                </div>
                <div className="docentes-container">
                    <div className="docentes-perfil">
                        <div className="docentes-infoTop">
                            <div>
                                <img src={docente1} alt="" />
                            </div>
                            <div>
                                <h3>Reudismam Rolim de Sousa</h3>
                                <p>Líder do grupo/Doutorado</p>
                            </div>
                        </div>
                        <div className="docentes-descricao">
                            <div className="docentes-sobre">
                                <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau
                                dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro
                                Universitário <Link to="" className="docentes-link">Ler mais</Link></p>
                            </div>
                            <div className="docentes-areas">
                                <h3>Áreas de interesse</h3>
                                <div>
                                    <p>Gestão de projetos</p>
                                    <p>Engenharia de software</p>
                                    <p>Línguagem de programação</p>
                                </div>
                            </div>
                        </div>
                        <div className="docentes-btn">
                            <button>Página do pesquisador</button>
                        </div>
                    </div>
                    <div className="docentes-perfil">
                        <div className="docentes-infoTop">
                            <div>
                                <img src={docente2} alt="" />
                            </div>
                            <div>
                                <h3>Felipe Torres Leite</h3>
                                <p>Membro/Mestrado</p>
                            </div>
                        </div>
                        <div className="docentes-descricao">
                            <div className="docentes-sobre">
                                <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau
                                dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro
                                Universitário <Link to="" className="docentes-link">Ler mais</Link></p>
                            </div>
                            <div className="docentes-areas">
                                <h3>Áreas de interesse</h3>
                                <div>
                                    <p>Gestão de projetos</p>
                                    <p>Engenharia de software</p>
                                    <p>Línguagem de programação</p>
                                </div>
                            </div>
                        </div>
                        <div className="docentes-btn">
                            <button>Página do pesquisador</button>
                        </div>
                    </div>
                    <div className="docentes-perfil">
                        <div className="docentes-infoTop">
                            <div>
                                <img src={docente3} alt="" />
                            </div>
                            <div>
                                <h3>Jarbele Cássia Coutinho</h3>
                                <p>Líder do grupo/Mestrado</p>
                            </div>
                        </div>
                        <div className="docentes-descricao">
                            <div className="docentes-sobre">
                                <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau
                                dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro
                                Universitário <Link to="" className="docentes-link">Ler mais</Link></p>
                            </div>
                            <div className="docentes-areas">
                                <h3>Áreas de interesse</h3>
                                <div>
                                    <p>Gestão de projetos</p>
                                    <p>Engenharia de software</p>
                                    <p>Línguagem de programação</p>
                                </div>
                            </div>
                        </div>
                        <div className="docentes-btn">
                            <button>Página do pesquisador</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageDefault>
    );
}