import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import ParceirosImg from '../../assets/images/Parceiros/parceiros.svg';
import UFERSA from './img/ufersa.png';
import PROEC from './img/proec.png';
import SEBRAE from './img/sebrae.png';
import ME from './img/me.png';
import RNgov from './img/rngov.png';
import './styles.css';

export default function Parceiros() {

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
            imageSrc={ParceirosImg}
            imageAlt="Imagem Parceiros"
        > 
            <div className="parceiros">
                <div className="parceiros-top">
                    <div className="parceiros-text" ref={Animation}>
                        <h1>Veja só alguns de nossos parceiros!</h1><br/>
                        <p>Temos o orgulho de ter esses patrocinadores e parceiros
                        que ajudam constantemente<br/> no crescimento da educação
                        e das <span>inovações</span></p>
                    </div><br/>
                    <img alt="parceiros imagem" className="img-parceiros" src={ParceirosImg} ref={Animation2}/>
                </div>
                <div className="parceiros-middle">
                    <div className="parceiros-middle-content">
                        <div className="parceiros-content-item">
                            <img alt="" src={UFERSA} className="parceiros-img-item" /><br/>
                            <p>Universidade Federal Rural do Semi-árido</p>
                        </div>
                        <div className="parceiros-content-item">
                            <img alt="" src={PROEC} className="parceiros-img-item" /><br/>
                            <p>Pró-reitoria de Extensão e Cultura</p>
                        </div>
                        <div className="parceiros-content-item">
                            <img alt="" src={SEBRAE} className="parceiros-img-item" /><br/>
                            <p>Serviço Brasileiro de Apoio às Micro e Pequenas Empresas</p>
                        </div>
                        <div className="parceiros-content-item">
                            <img alt="" src={ME} className="parceiros-img-item" /><br/>
                            <p>Ministério da Educação - BRASIL</p>
                        </div>
                        <div className="parceiros-content-item">
                            <img alt="" src={RNgov} className="parceiros-img-item" /><br/>
                            <p>Governo do Rio Grande do Norte</p>
                        </div>
                    </div>
                </div>


            </div>
         </PageDefault>
    );
}