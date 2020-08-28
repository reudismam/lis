import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import HomeImg from './img/inicio.png';
import btnProjeto from './img/btn-projeto.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';

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
            <div>            
                <div className="home">
                    <div className="home-top">
                        <div className="home-text" ref={Animation}>
                            <h1>Somos apaixonados por inovação e <br/>fazemos disso nosso trabalho</h1><br/>
                            <button className="projetos-btn"><img src={btnProjeto} alt=""/> Projetos</button>
                        </div><br/>
                        <img alt="home imagem" className="img-home" src={HomeImg} ref={Animation2}/>
                    </div>
                </div>
                <p className="text-home">Confira nossas últimas notícias</p>
                <div className="home-grid">
                    <div className="grid-item">
                        <img src={img1} alt=""/>
                        <div className="notes">
                            <p>Pré-Algoritmos</p><br/><br/>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento <a>Ler mais</a> 
                            </p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src={img2} alt=""/>
                        <div className="notes">
                            <p>Imersão Python</p><br/><br/>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento <a>Ler mais</a> 
                            </p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src={img2} alt=""/>
                        <div className="notes">
                            <p>Imersão Python</p><br/><br/>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento <a>Ler mais</a> 
                            </p>
                        </div>
                    </div>
                </div>
                <button className="btn-home">Mais projetos</button>
                    <p className="text-home">Últimos videos</p>
                <div className="last">
                    <div className="post-last">
                        <div className="video-last">
                            <iframe 
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className="notes notes-last">  
                            <p>Pré-Algoritmos</p><br/><br/>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas 
                                importantes para motivação dos alunos para o aprendizado de 
                                programação. Isso pode ser explicado pelo fato dessas 
                                competições serem, frequentemente, monitoradas por grandes 
                                empresas, voltadas para o desenvolvimento <a>Ler mais</a>
                            </p>
                        </div>
                    </div>
                    <button className="btn-last">Mais vídeos</button>
                </div>
            </div> 
         </PageDefault>
    );
}