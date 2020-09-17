import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import ProjetoImg from '../../assets/images/Projeto/projeto.svg';
import imgLeft from './img/imgleft.png';
import imgLeft1 from './img/imgright-left1.png';
import imgLeft2 from './img/imgright-left2.png';
import imgRight from './img/imgright-right.png';

export default function Projeto() {

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
            imageSrc={ProjetoImg}
            imageAlt="Imagem Projeto"
        >
            <div>        
                <div className="projeto" >
                    <div className="projeto-top" >
                        <div className="projeto-text" ref={Animation} >
                            <h1>Veja alguns de nossos projetos!</h1><br/>
                            <p>Buscamos te deixar bem interado sobre o assunto, aqui você pode acompanhar o que estamos fazendo ...</p>
                        </div><br/>
                        <img alt="projeto imagem" className="img-projeto" src={ProjetoImg} ref={Animation2}/>
                    </div>
                </div>
                <div className="projetos-lineTop">
                    <hr/>
                    <input type="text" placeholder="pesquisar"/>
                </div>
                <div className="projetos-container">
                    <div className="projetos-post">
                        <div className="projetos-imgContainer" >
                            <div className="projetos-leftImg" >
                                <img src={imgLeft} alt="" />
                            </div>
                            <div className="projetos-rightImgs" >
                                <div className="rightImgs-left" >
                                    <img src={imgLeft1} alt="" className="imagem1"/>
                                    <img src={imgLeft2} alt="" className="imagem2"/>
                                </div>
                                <div className="rightImgs-right" >
                                    <img src={imgRight} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="projetos-descricao" >
                            <h3>Imersão Python</h3>
                            <p>
                            Descrição: As olimpíadas de programação são ferramentas importantes para motivação dos alunos para o aprendizado de 
                            programação. Isso pode ser explicado pelo fato dessas competições serem, frequentemente, monitoradas por grandes empresas, 
                            voltadas para o desenvolvimento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Vitae aliquet nec ullamcorper sit. 
                            </p>
                            <button >Saiba mais</button>
                        </div>
                    </div>
                    <div className="projetos-post">
                        <div className="projetos-imgContainer" >
                            <div className="projetos-leftImg" >
                                <img src={imgLeft} alt="" />
                            </div>
                            <div className="projetos-rightImgs" >
                                <div className="rightImgs-left" >
                                    <img src={imgLeft1} alt="" className="imagem1"/>
                                    <img src={imgLeft2} alt="" className="imagem2"/>
                                </div>
                                <div className="rightImgs-right" >
                                    <img src={imgRight} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="projetos-descricao" >
                            <h3>Imersão Python</h3>
                            <p>
                            Descrição: As olimpíadas de programação são ferramentas importantes para motivação dos alunos para o aprendizado de 
                            programação. Isso pode ser explicado pelo fato dessas competições serem, frequentemente, monitoradas por grandes empresas, 
                            voltadas para o desenvolvimento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Vitae aliquet nec ullamcorper sit. 
                            </p>
                            <button >Saiba mais</button>
                        </div>
                    </div>
                    <button className="btn-bottom">Carregar mais</button>
                </div>
            </div>
        </PageDefault>
    );
}