import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import PortfolioImg from './img/portfolio.png'

export default function Portifolio() {

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
            <div className="portfolio">
            <div className="portfolio-top">
                    <div className="portfolio-text" ref={Animation}>
                        <h1>Veja alguns portfólios</h1><br/>
                        <p>Essas são algumas criações que nos orgulham!</p>
                    </div><br/>
                    <img alt="portfolio imagem" className="img-portfolio" src={PortfolioImg} ref={Animation2}/>
                </div>
            </div>
         </PageDefault>
    );
}