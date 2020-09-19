import React from 'react';
import { Link } from "react-router-dom";
import PageDefault from '../DefaultPage';
import './styles.css';
import HomeImg from '../../assets/images/Home/home.svg';
import btnProjeto from './img/btn-projeto.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import Projetos from '../../components/Projetos';

export default function Home() {

    return (
        <PageDefault
            imageSrc={HomeImg}
            imageAlt="Imagem da Home"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos"
        >
            <Projetos />
            <div>            
                <p className="text-home">Confira nossas últimas notícias</p>
                <div className="home-grid">
                    <div className="grid-item">
                        <img src={img1} alt=""/>
                        <div className="notes">
                            <p>Pré-Algoritmos</p>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento <Link to="">Ler mais</Link> 
                            </p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src={img2} alt=""/>
                        <div className="notes">
                            <p>Imersão Python</p>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento <Link to="">Ler mais</Link> 
                            </p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <img src={img2} alt=""/>
                        <div className="notes">
                            <p>Imersão Python</p>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas importantes para 
                                motivação dos alunos para o aprendizado de programação. Isso pode ser 
                                explicado pelo fato dessas competições serem, frequentemente, monitoradas 
                                por grandes empresas, voltadas para o desenvolvimento <Link to="">Ler mais</Link> 
                            </p>
                        </div>
                    </div>
                </div>
                <button className="btn-home">Mais projetos</button>
                    <p className="text-home">Últimos videos</p>
                <div className="last">
                    <div className="post-last">
                        <div className="video-last">
                            <iframe title="video"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className="notes notes-last">  
                            <p>Pré-Algoritmos</p>
                            <p>
                                Descrição: As olimpíadas de programação são ferramentas 
                                importantes para motivação dos alunos para o aprendizado de 
                                programação. Isso pode ser explicado pelo fato dessas 
                                competições serem, frequentemente, monitoradas por grandes 
                                empresas, voltadas para o desenvolvimento <Link to="">Ler mais</Link>
                            </p>
                        </div>
                    </div>
                    <button className="btn-last">Mais vídeos</button>
                </div>
            </div> 
         </PageDefault>
    );
}