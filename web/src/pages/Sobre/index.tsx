import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import './styles.css';
import SobreImg from '../../assets/images/Sobre/sobre.svg';
import FlipImg from './imgs/Flipboard.png';
import GlobeImg from './imgs/Globe.png';
import PeopleImg from './imgs/People.png';

export default function Sobre() {

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
            imageSrc={SobreImg}
            imageAlt="Imagem Sobre"
            title="Eai! Venha conhecer um pouco mais sobre nós"
            description="Nossa equipe é formada por discentes, docentes, parceiros e muito mais... Todos com o mesmo propósito! INOVAR"
        > 
            <div className="about">
                <div className="about-top">
                    <div className="about-text" ref={Animation}>
                        <h1>Venha conhecer um pouco mais sobre nós</h1>
                        <br/>
                        <p>Nossa equipe é formada por discentes, docentes, parceiros e muito mais...<br/> Todos com o mesmo propósito! <span>INOVAR</span></p>
                    </div>
                    <br/><br/>
                    <img alt="imagem sobre" src={SobreImg} className="img-about" ref={Animation2}/>
                    <br/>
                </div>
                    
                <div className="about-middle">
                    <div className="aboutOne">
                        <div className="aboutOne-item one">
                            <h2>Somos uma equipe focada em...</h2><br/>
                            <p>Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. 
                                Ut pharetra sit amet aliquam id diam maecenas ultricies. 
                                Euismod quis viverra nibh cras pulvinar mattis. 
                                Amet nulla facilisi morbi tempus iaculis. 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                               </p>
                        </div>
                        <div className="aboutOne-item two">
                            <h2>Somos uma equipe focada em...</h2><br/>
                            <p>Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. 
                                Ut pharetra sit amet aliquam id diam maecenas ultricies. 
                                Euismod quis viverra nibh cras pulvinar mattis. 
                                Amet nulla facilisi morbi tempus iaculis. 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                               </p>
                        </div>
                    </div>

                    <div className="about-history">
                        <div className="history-lis">
                            <h2>LIS</h2><br/>
                            <p>Neque gravida in fermentum et sollicitudin. Molestie at elementum eu facilisis sed. 
                            Viverra nam libero justo laoreet. Scelerisque eu ultrices vitae auctor eu augue ut 
                            lectus arcu. Leo integer malesuada nunc vel. Sed cras ornare arcu dui vivamus arcu felis. 
                            Amet consectetur adipiscing elit ut aliquam purus sit. Amet cursus sit amet dictum sit amet justo. 
                            Enim ut tellus elementum sagittis vitae et leo duis ut. Sapien nec sagittis aliquam malesuada bibendum 
                            arcu vitae elementum curabitur. Risus viverra adipiscing at in tellus. Tellus pellentesque eu tincidunt 
                            tortor. Porttitor lacus luctus accumsan tortor posuere.</p><br/>
                            <button className="lis-acess acess" type="button">Acesse</button>
                        </div>
                        <br/>
                        <div className="history-lis">
                            <h2>História</h2><br/>
                            <p>Neque gravida in fermentum et sollicitudin. Molestie at elementum eu facilisis sed. 
                            Viverra nam libero justo laoreet. Scelerisque eu ultrices vitae auctor eu augue ut 
                            lectus arcu. Leo integer malesuada nunc vel. Sed cras ornare arcu dui vivamus arcu felis. 
                            Amet consectetur adipiscing elit ut aliquam purus sit. Amet cursus sit amet dictum sit amet justo. 
                            Enim ut tellus elementum sagittis vitae et leo duis ut. Sapien nec sagittis aliquam malesuada bibendum 
                            arcu vitae elementum curabitur. Risus viverra adipiscing at in tellus. Tellus pellentesque eu tincidunt 
                            tortor. Porttitor lacus luctus accumsan tortor posuere.</p><br/>
                            <button className="history-acess acess" type="button">Acesse</button>
                        </div>
                    </div>

                    <div className="about-values">
                        <div className="values-column">
                            <img alt="planejamento" src={FlipImg} className="value-img"/>
                            <br/>
                            <h4>Planejamento</h4>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas.</p>
                        </div>

                        <div className="values-column">
                            <img alt="abrangencia" src={GlobeImg} className="value-img"/>
                            <br/>
                            <h4>Abrangência</h4>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas.</p>
                        </div>

                        <div className="values-column">
                            <img alt="foco da equipe" src={PeopleImg} className="value-img"/>
                            <br/>
                            <h4>Foco da equipe</h4>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                </div>
            </div>
         </PageDefault>
    );
}