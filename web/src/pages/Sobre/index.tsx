import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import PageDefault from '../DefaultPage';
import SobreImg from '../../assets/images/Sobre/sobre.svg';
import FlipImg from '../../assets/images/Sobre/Flipboard.png';
import GlobeImg from '../../assets/images/Sobre/Globe.png';
import PeopleImg from '../../assets/images/Sobre/People.png';
import styled from 'styled-components';


const About = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
const AboutMiddle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const AboutOne = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    flex-wrap: wrap;
    @media (max-width: 450px){
        padding: 20px 30px;
    }


`
const AboutOneItem = styled.div`
    padding-bottom: 60px;
`
const TituloOne = styled.h2`
    color: var(--color-pagina-textoazulclaro);
`
const Paragraph = styled.p`
    color: var(--color-pagina-texto);
    text-align: justify;
`
const TituloTwo = styled.h2`
        color: var(--color-pagina-textoazulclaro);
        text-align: right;

`
const AboutHistory = styled.div`
    position: relative;
    display: flex;
    padding: 20px 50px;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 450px){
        padding: 15px;
    }
    @media (min-width: 451px) and (max-width: 900px){
        flex-direction: column;
        align-items: center;
    }
`

const HistoryLis = styled.div`
    transition: 0.2s;
    padding: 40px;
    background: #F0F0F7;
    box-sizing: border-box;
    min-width: 270px;
    width: 480px;
    height: 100%;
    border-radius: 13px;
    &:hover {
    background: #2B4CB8;
    }
    &:hover h2{
    color: #fff;
    }
    &:hover Paragraph{
        color: #fff;
    }
    &:hover button{
    opacity: 1;
    background: #fff;
    color: #2B4CB8;
    }
    @media (max-width: 450px){
        opacity: 1;
    }
    @media (min-width: 451px) and (max-width: 900px){
        height: 450px;
        margin-bottom: 40px;
    }
`
const TituloHistory = styled.h2`
    color: var(--color-pagina-textoazulclaro);
`
const ParagraphHistory = styled.p`
    color: var(--color-cards-textos);
    text-align: justify;
`

const Acesso = styled.button`
    opacity: 0;
    float: right;
    background: #2B4CB8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 7px 30px;
    color: #ffffff;
    @media (max-width: 450px){
        opacity: 1;
    }
`
const AboutValues = styled.div`
    display: flex;
    padding: 100px 100px;
    justify-content: space-around;
    flex-direction: row;
    @media (max-width: 450px){
        padding: 15px;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 451px) and (max-width: 900px){
        flex-direction: column;
    }
`
const ValuesColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 270px;
    width: 100%;
    padding: 10px 20px;
    height: 100%;
    border-radius: 10px;
    margin: 10px;
    box-sizing: border-box;
    transition: 0.2s;
    &hover{
        background: #F0F0F7;
    }
    @media (max-width: 450px){
        padding: 30px 20px;
    }
`
const ValueImg = styled.img`
    width: 80px;
`
const TituloValues = styled.h4`
    color: #2CB4EC;

`
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
            <About>
                    
                <AboutMiddle>
                    <AboutOne>
                        <AboutOneItem>
                            <TituloOne>Somos uma equipe focada em...</TituloOne><br/>
                            <Paragraph>Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. 
                                Ut pharetra sit amet aliquam id diam maecenas ultricies. 
                                Euismod quis viverra nibh cras pulvinar mattis. 
                                Amet nulla facilisi morbi tempus iaculis. 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                               </Paragraph>
                        </AboutOneItem>
                        <AboutOneItem>
                            <TituloTwo>Somos uma equipe focada em...</TituloTwo><br/>
                            <Paragraph>Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. 
                                Ut pharetra sit amet aliquam id diam maecenas ultricies. 
                                Euismod quis viverra nibh cras pulvinar mattis. 
                                Amet nulla facilisi morbi tempus iaculis. 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                                Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
                                Dictumst quisque sagittis purus sit amet volutpat. Tellus at urna condimentum 
                               </Paragraph>
                        </AboutOneItem>
                    </AboutOne>

                    <AboutHistory>
                        <HistoryLis>
                            <TituloHistory>LIS</TituloHistory><br/>
                            <ParagraphHistory>Neque gravida in fermentum et sollicitudin. Molestie at elementum eu facilisis sed. 
                            Viverra nam libero justo laoreet. Scelerisque eu ultrices vitae auctor eu augue ut 
                            lectus arcu. Leo integer malesuada nunc vel. Sed cras ornare arcu dui vivamus arcu felis. 
                            Amet consectetur adipiscing elit ut aliquam purus sit. Amet cursus sit amet dictum sit amet justo. 
                            Enim ut tellus elementum sagittis vitae et leo duis ut. Sapien nec sagittis aliquam malesuada bibendum 
                            arcu vitae elementum curabitur. Risus viverra adipiscing at in tellus. Tellus pellentesque eu tincidunt 
                            tortor. Porttitor lacus luctus accumsan tortor posuere.</ParagraphHistory><br/>
                            <Acesso type="button">Acesse</Acesso>
                        </HistoryLis>
                        <br/>
                        <HistoryLis>
                            <TituloHistory>História</TituloHistory><br/>
                            <ParagraphHistory>Neque gravida in fermentum et sollicitudin. Molestie at elementum eu facilisis sed. 
                            Viverra nam libero justo laoreet. Scelerisque eu ultrices vitae auctor eu augue ut 
                            lectus arcu. Leo integer malesuada nunc vel. Sed cras ornare arcu dui vivamus arcu felis. 
                            Amet consectetur adipiscing elit ut aliquam purus sit. Amet cursus sit amet dictum sit amet justo. 
                            Enim ut tellus elementum sagittis vitae et leo duis ut. Sapien nec sagittis aliquam malesuada bibendum 
                            arcu vitae elementum curabitur. Risus viverra adipiscing at in tellus. Tellus pellentesque eu tincidunt 
                            tortor. Porttitor lacus luctus accumsan tortor posuere. </ParagraphHistory><br/>
                            <Acesso type="button">Acesse</Acesso>
                        </HistoryLis>
                    </AboutHistory>

                    <AboutValues>
                        <ValuesColumn>
                            <ValueImg alt="planejamento" src={FlipImg}/>
                            <br/>
                            <TituloValues>Planejamento</TituloValues>
                            <br/>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas.
                                </Paragraph>
                        </ValuesColumn>

                        <ValuesColumn>
                            <ValueImg alt="abrangencia" src={GlobeImg}/>
                            <br/>
                            <TituloValues>Abrangência</TituloValues>
                            <br/>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas.
                                </Paragraph>
                        </ValuesColumn>

                        <ValuesColumn>
                            <ValueImg alt="foco da equipe" src={PeopleImg}/>
                            <br/>
                            <TituloValues>Foco da equipe</TituloValues>
                            <br/>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas.
                                </Paragraph>
                        </ValuesColumn>
                    </AboutValues>
                </AboutMiddle>
            </About>
         </PageDefault>
    );
}