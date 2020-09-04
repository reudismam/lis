import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import PageDefault from '../DefaultPage';
import discentes from './img/discentes.png';
import discente1 from './img/discente1.png';
import discente2 from './img/discente2.png';
import discente3 from './img/discente3.png';
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
                <div className="discentes">
                    <div className="discentes-top">
                        <div className="discentes-text" ref={Animation}>
                            <h1>Esses são os discentes</h1><br />
                            <p>Nossa lista de discentes comprometidos com a inovação</p>
                        </div><br />
                        <img alt="discentes imagem" className="img-discentes" src={discentes} ref={Animation2} />
                    </div>
                    <div className="discentes-container">
                        <div className="discentes-perfil">
                            <div className="discentes-infoTop">
                                <div>
                                    <img src={discente1} alt="" />
                                </div>
                                <div>
                                    <h3>Fátima Luana</h3>
                                    <p>Tecnologia da Informação</p>
                                </div>
                            </div>
                            <div className="discentes-descricao">
                                <div className="discentes-sobre">
                                    <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau
                                    dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro
                                Universitário <Link to="" className="discentes-link">Ler mais</Link></p>
                                </div>
                                <div className="discentes-areas">
                                    <h3>Áreas de interesse</h3>
                                    <div>
                                        <p>Gestão de projetos</p>
                                        <p>Engenharia de software</p>
                                        <p>Línguagem de programação</p>
                                    </div>
                                </div>
                            </div>
                            <div className="discentes-btn">
                                <button>Página do pesquisador</button>
                            </div>
                        </div>
                        <div className="discentes-perfil">
                            <div className="discentes-infoTop">
                                <div>
                                    <img src={discente2} alt="" />
                                </div>
                                <div>
                                    <h3>Iorrane Nobre</h3>
                                    <p>Mestranda em Ensino</p>
                                </div>
                            </div>
                            <div className="discentes-descricao">
                                <div className="discentes-sobre">
                                    <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau
                                    dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro
                                Universitário <Link to="" className="discentes-link">Ler mais</Link></p>
                                </div>
                                <div className="discentes-areas">
                                    <h3>Áreas de interesse</h3>
                                    <div>
                                        <p>Gestão de projetos</p>
                                        <p>Engenharia de software</p>
                                        <p>Línguagem de programação</p>
                                    </div>
                                </div>
                            </div>
                            <div className="discentes-btn">
                                <button>Página do pesquisador</button>
                            </div>
                        </div>
                        <div className="discentes-perfil">
                            <div className="discentes-infoTop">
                                <div>
                                    <img src={discente3} alt="" />
                                </div>
                                <div>
                                    <h3>Francisco Noberto</h3>
                                    <p>Tecnologia da Informação</p>
                                </div>
                            </div>
                            <div className="discentes-descricao">
                                <div className="discentes-sobre">
                                    <p>Professor Assistente A2 e Coordenador do Curso de Engenharia de Software da Universidade Federal Rural do Semi-Árido (UFERSA), campus Pau
                                    dos Ferros. Membro do Núcleo Docente Estruturante (NDE) e Colegiado de Curso de Engenharia de Software; e Membro do Conselho de Centro
                                Universitário <Link to="" className="discentes-link">Ler mais</Link></p>
                                </div>
                                <div className="discentes-areas">
                                    <h3>Áreas de interesse</h3>
                                    <div>
                                        <p>Gestão de projetos</p>
                                        <p>Engenharia de software</p>
                                        <p>Línguagem de programação</p>
                                    </div>
                                </div>
                            </div>
                            <div className="discentes-btn">
                                <button>Página do pesquisador</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageDefault>
    );
}