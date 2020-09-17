import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import PortfolioImg from '../../assets/images/Portifolio/portfolio.svg';
import imgItem from './img/item.png';
import btn1 from './img/btn1.png';
import btn2 from './img/btn2.png';

export default function Portifolio() {

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
        <PageDefault
            imageSrc={PortfolioImg}
            imageAlt="Imagem Portifolio"
        >
            <div>
                <div className="portfolio">
                    <div className="portfolio-top">
                        <div className="portfolio-text" ref={Animation}>
                            <h1>Veja alguns portfólios</h1><br />
                            <p>Essas são algumas criações que nos orgulham!</p>
                        </div><br />
                        <img alt="portfolio imagem" className="img-portfolio" src={PortfolioImg} ref={Animation2} />
                    </div>
                </div>
                <div className="line-topo">
                    <hr />
                    <input type="text" placeholder="pesquisar" />
                </div>
                <div className="boxL">
                    <div className="img">
                        <img src={imgItem} alt='some value' />
                    </div>
                    <div className="item">
                        <div className="boxtop">
                            <h4 className="h4">Lorem Ipsum dolor</h4> <p className="epoch">00/00/2020 - 3 semanas atrás</p>
                        </div>
                        <div className="conteudo">
                            <p className="post">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque </p>
                            <br />
                            <p className="post">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque </p>
                        </div>
                        <button className="button">Acesse</button>
                    </div>
                </div>
                <div className="line-center">
                    <hr />
                    <p>Semana passada</p>
                </div>
                <div className="grid-container">
                    <div className="grid">
                        <div className="grid-item">
                            <img src={imgItem} alt='some value' />
                            <h4 className="grid-h4 h4">Lorem Ipsum dolor</h4>
                            <div className="grid-post">
                                <p className="post">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque </p>
                            </div>
                            <div className="grid-bottom">
                                <button className="button-grid">Acesse</button><p className="grid-epoch">00/00/2020 - 3 semanas atrás</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src={imgItem} alt='some value' />
                            <h4 className="grid-h4 h4">Lorem Ipsum dolor</h4>
                            <div className="grid-post">
                                <p className="post">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque </p>
                            </div>
                            <div className="grid-bottom">
                                <button className="button-grid">Acesse</button><p className="grid-epoch">00/00/2020 - 3 semanas atrás</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src={imgItem} alt='some value' />
                            <h4 className="grid-h4 h4">Lorem Ipsum dolor</h4>
                            <div className="grid-post">
                                <p className="post">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque </p>
                            </div>
                            <div className="grid-bottom">
                                <button className="button-grid">Acesse</button><p className="grid-epoch">00/00/2020 - 3 semanas atrás</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img src={imgItem} alt='some value' />
                            <h4 className="grid-h4 h4">Lorem Ipsum dolor</h4>
                            <div className="grid-post">
                                <p className="post">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorentesque </p>
                            </div>
                            <div className="grid-bottom">
                                <button className="button-grid">Acesse</button><p className="grid-epoch">00/00/2020 - 3 semanas atrás</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-navigation">
                    <button className="btn-page btn-selected">1</button>
                    <button className="btn-page">2</button>
                    <button className="btn-page">3</button>
                    <button className="btn-page" ><img src={btn1} alt='some value' /></button>
                    <button className="btn-page"><img src={btn2} alt='some value' /></button>
                </div>
            </div>
        </PageDefault>
    );
}