import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import NoticiaImg from './img/noticia.png'
import imgItem from './img/item.png';
import imgNews1 from './img/imgNews1.png';
import imgNews2 from './img/imgNews2.png';
import imgNews3 from './img/imgNews3.png';

export default function Noticias() {

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
            <div className="noticia">
                <div className="noticia-top">
                    <div className="noticia-text" ref={Animation}>
                        <h1>Acompanhe notícias da Universidade<br /> mais recentes</h1><br />
                        <p>Buscamos de deixar bem informado com as notícias<br /> mais importantes atualizadas!</p>
                    </div><br />
                    <img alt="noticia imagem" className="img-noticia" src={NoticiaImg} ref={Animation2} />
                </div>
                <div className="page-contnote">
                    <div className="noticias-lineTop">
                        <hr id="linha1" />
                        <input type="text" placeholder="pesquisar" />
                    </div>
                    <div className="grid-container-noticias">
                        <div className="grid-news-main">
                            <div>
                                <p id="txt1"><strong>O que faz uma desenvolvedora Front-end</strong></p>
                                <img className="img-main-news" src={imgItem} alt='some value' />
                            </div>
                            <div id="cptxt1">
                                Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum mattis pellentesque id nibh tortor. Eros in cursus turpis massa tincidunt dui ut. Habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc consequat interdum varius sit amet. Leo vel orci porta non pulvinar neque laoreet. Viverra adipiscing at in tellus. At erat pellentesque adipiscing commodo elit at imperdiet. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                                <button className="bcp1">Acesse</button>

                            </div>

                        </div>
                        <p id="txt2"><strong>Semana passada</strong></p>
                        <hr id="linha2" />
                        <div className="div-grid">
                            <div className="grid-item-note">
                                <p className="cardnt-1"><strong>Muito obrigado, diz UFERSA</strong></p>
                                <img className="img1" src={imgNews1} alt='some value' />
                                <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                                <button className="bn-card">Acesse</button>
                            </div>
                            <div className="grid-item-note">
                                <p className="cardnt-1"><strong>Cuidado nas ruas, alerta LIS</strong></p>
                                <img className="img1" src={imgNews2} alt='some value' />
                                <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                                <button className="bn-card">Acesse</button>
                            </div>
                            <div className="grid-item-note">
                                <p className="cardnt-1"><strong>Estruturas criadas por software</strong></p>
                                <img className="img1" src={imgNews3} alt='some value' />
                                <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                                <button className="bn-card">Acesse</button>
                            </div>
                            <div className="grid-item-note">
                                <p className="cardnt-1"><strong>Cuidado nas ruas, alerta LIS</strong></p>
                                <img className="img1" src={imgNews2} alt='some value' />
                                <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                                <button className="bn-card">Acesse</button>
                            </div>

                        </div>
                    </div>

                </div>
                <button className="lastbtn-noticias">Carregar mais</button>

            </div>
        </PageDefault>
    );
}