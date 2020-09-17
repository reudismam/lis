import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import NoticiaImg from '../../assets/images/Noticias/noticia.svg';
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
            <div>
                <div className="noticias">
                    <div className="noticias-top">
                        <div className="noticias-text" ref={Animation}>
                            <h1>Acompanhe notícias da Universidade<br /> mais recentes</h1><br />
                            <p>Buscamos de deixar bem informado com as notícias<br /> mais importantes atualizadas!</p>
                        </div><br />
                        <img alt="noticias imagem" className="img-noticias" src={NoticiaImg} ref={Animation2} />
                    </div>
                </div>
            </div>
            <div className="noticias-container">
                <div className="noticias-lineTop">
                    <hr/>
                    <input type="text" placeholder="pesquisar" />
                </div>
                <div className="noticias-post">
                    <div>
                        <p><strong>O que faz uma desenvolvedora Front-end</strong></p>
                        <iframe title="video"
                            src="https://www.youtube.com/embed/VnT7pT6zCcA">
                        </iframe>
                    </div>
                    <div className="noticias-postRight">
                        <div>
                            <p>
                                Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies. Euismod quis viverra nibh cras pulvinar mattis. Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum mattis pellentesque id nibh tortor. Eros in cursus turpis massa tincidunt dui ut. Habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc consequat interdum varius sit amet. Leo vel orci porta non pulvinar neque laoreet. Viverra adipiscing at in tellus. At erat pellentesque adipiscing commodo elit at imperdiet. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
                            </p>
                        </div>
                        <div>
                            <button>Acesse</button>
                        </div>
                    </div>
                </div>
                <div className="noticias-centerInfo">
                    <p><strong>Semana passada</strong></p>
                    <hr/>
                </div>
                <div className="noticias-grid">
                    <div className="grid-item-note">
                        <h3 className="cardnt-1">Muito obrigado, diz UFERSA</h3>
                        <img className="img1" src={imgNews1} alt='some value' />
                        <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                        <button className="bn-card">Acesse</button>
                    </div>
                    <div className="grid-item-note">
                        <h3 className="cardnt-1">Cuidado nas ruas, alerta LIS</h3>
                        <img className="img1" src={imgNews2} alt='some value' />
                        <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                        <button className="bn-card">Acesse</button>
                    </div>
                    <div className="grid-item-note">
                        <h3 className="cardnt-1">Estruturas criadas por software</h3>
                        <img className="img1" src={imgNews3} alt='some value' />
                        <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                        <button className="bn-card">Acesse</button>
                    </div>
                    <div className="grid-item-note">
                        <h3 className="cardnt-1">Cuidado nas ruas, alerta LIS</h3>
                        <img className="img1" src={imgNews2} alt='some value' />
                        <p className="cardnc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet</p>
                        <button className="bn-card">Acesse</button>
                    </div>
                </div>
                <button className="noticias-btn">Carregar mais</button>
            </div>
        </PageDefault>
    );
}