import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import PageDefault from '../DefaultPage';
import ContatoImg from '../../assets/images/Contato/contato.svg';
import group from '../../assets/images/Contato/Group.png';
import mail from '../../assets/images/Contato/mail.png';
import local from '../../assets/images/Contato/local.png';
import ig from '../../assets/images/Contato/ig.png';
import tt from '../../assets/images/Contato/tt.png';
import fb from '../../assets/images/Contato/fb.png';
import ln from '../../assets/images/Contato/ln.png';
import styled from 'styled-components';

const Contatos = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
const ContatosPage = styled.div`
    background: #F0F0F7;
`
const ContatosContainer = styled.div`
    border-radius: 8pt;
    box-shadow: 0px 7px 4px rgba(0,0,0,0.2);
    margin: 30px 40px;
    background: #fff;
    display: flex;
    flex-direction: row;
    font: roboto;
    padding: 30px 40px;
    @media (max-width: 400px){
        margin: 30px 10px;
        padding: 10px;
        flex-direction: column;
    }
    @media (min-width:401px) and (max-width:900px){
        margin: 30px 10px;
        padding: 10px;
    }
`
const ContatoLeft = styled.div`
    width: 50%;
    color: var(--color-pagina-textoazulclaro);
    padding: 30px 50px;
    flex-direction: column;
    @media (max-width: 400px){
        width: 100%;
        padding: 10px;
    }
    @media (min-width:401px) and (max-width:900px){
        padding: 10px;
    }
`
const ContatoTitulo = styled.h2`
    @media (max-width: 400px){
        text-align: center;
        font-size: 22px;
    }
    @media (min-width:401px) and (max-width:900px){
    font-size: 24px;
    }
`
const ParagraphContainer = styled.p`
    color: var(--color-pagina-texto);
    @media (min-width:401px) and (max-width:900px){
        font-size: 16px;
    }
`
const ContatoInfoTop = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 14pt;
    text-align: justify;
`
const ContatoLis = styled.div`
    text-align: justify;
    font-size: 14pt;
    @media (max-width: 400px){
        text-align: center;
        margin-bottom: 20px;
    }
`
const ParagraphContatoLis = styled.div`
    text-align: justify;
    font-size: 10pt;
    padding: 30px 50% 30px 0;
    @media (max-width: 400px){
        padding: 10px 20px;
    }
    @media (min-width:401px) and (max-width:900px){
        padding: 30px 10% 30px 0;
    }

`
const EnderecosContato = styled.div`
    margin: 0 0px 50px 0px;
    flex-direction: column;
    @media (max-width: 400px){
        margin-bottom: 30px;
    }
    @media (min-width:401px) and (max-width:900px){
        margin-bottom: 20px;
    }
`
const EnderecosItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 19px;
    margin-bottom: 8px;
    @media (max-width: 400px){
        margin-bottom: 10px;
    }
`
const ImageEnderecoContato = styled.img`
    max-height: 30px;
`
const ParagraphEnderecoContato = styled.p`
font-weight: bold;
color: var(--color-pagina-textoazul);
`
const SocialeContato = styled.div`
    width: 315px;
    height: 30;
    margin: 0 237px 0 84px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 400px){
        width: 100%;
        margin: 0;
        padding: 0 40px;
    }
    @media (min-width:401px) and (max-width:900px){
        margin: 0;
        padding: 0 40px;
    }
`
const ContatoLine = styled.div`
    width: 1px;
    @media (max-width: 400px){
        width: 100%;
    }
`
const LMid = styled.hr`
    margin-top: 40px;
    width: 1px;
    height: 88%;
    border: 1px solid #2BB3EB;
    @media (max-width: 400px){
        margin-top: 20px;
        margin-left: 30px;
        width: 75%;
        height: 1px;
    }
`
const ContatoRight = styled.div`
    width: 50%;
    padding: 40px 50px;
    @media (max-width: 400px){
        width: 100%;
        padding: 30px 20px;
    }
    @media (min-width:401px) and (max-width:900px){
        width: 100%;
        padding: 10px 20px;
    }
`
const ContatoMsg = styled.div`
    color: var(--color-pagina-texto);
    margin-bottom: 50px;
`
const GetContatos = styled.div`
    padding-bottom: 30px;
`
const CampoTextoContato = styled.input`
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #E6E6F0;
    padding: auto;
    font-size: 20px;
    color: #424242;
    background-color: #E6E6F0;
    @media (max-width: 400px){
        height: 50px;
    }
    @media (min-width:401px) and (max-width:900px){
        height: 50px;
    }
`
const CampoTextoAreaContato = styled.textarea`
    font-size: 18px;
    color: #424242;
    font: roboto;
    min-width: 100%;
    max-width: 100%;
    min-height: 300px;
    max-height: 300px;
    border-radius: 8x;
    border: 1px solid #E6E6F0;
    background-color: #E6E6F0;

`
const BtnContato = styled.button`
    width: 120px;
    height: 46px;
    border-radius: 8px;
    float: right;
    margin-top: 20px;
    border: none;
    font-weight: bold;
    color: var(--color-botao-texto);
    background-color: var(--color-pagina-botao);
`

export default function Contato() {

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
            imageSrc={ContatoImg}
            imageAlt="Imagem Contato"
            title="Vamos nos conhecer um pouco mais"
            description="Deixe seu feedback para melhorarmos cada vez mais!"
        >
            <Contatos>
                <ContatosPage>
                    <ContatosContainer>
                        <ContatoLeft>
                            <ContatoInfoTop>
                                <ContatoTitulo>Entre em contato conosco!</ContatoTitulo>
                                <ParagraphContainer>
                                    Id cursus metus aliquam eleifend mi in nulla posuere
                                    sollicitudin. Ut pharetra  sit amet aliquam id diam maecenas
                                    ultricies. Euismod quis viverra nibh cras pulvinar mattis.
                                    Amet nulla facilisi morbi tempus iaculis. Vestibulum mattis
                                    ullamcorentesque adipiscing commodo  elit at imperdiet.
                                    Orci sagittis eu volutpat odio facilisis mauris sit amet
                                    massa.
                                </ParagraphContainer>
                            </ContatoInfoTop>
                            <ContatoLis>
                                <h3>LIS</h3>
                                <ParagraphContatoLis>
                                    Id cursus metus aliquam eleifend mi in
                                    nulla posuere sollicitudin. Ut pharetra sit
                                    amet aliquam id diam maecenas ultricies.
                                    Euismod quis viverra nibh cras pulvinar
                                    mattis. Amet nulla facilisi morbi tempus
                                    iaculis. Vestibulum mattis ullamcorentesque
                                </ParagraphContatoLis>
                            </ContatoLis>
                            <EnderecosContato>
                                <EnderecosItem>
                                    <div>
                                        <ImageEnderecoContato src={group} alt="" />
                                    </div>
                                    <div>
                                        <ParagraphEnderecoContato>sitelisexample.com.br</ParagraphEnderecoContato>
                                    </div>
                                </EnderecosItem>
                                <EnderecosItem>
                                    <div>
                                        <ImageEnderecoContato src={mail} alt="" />
                                    </div>
                                    <div>
                                        <ParagraphEnderecoContato>sitelisexample@.com.br</ParagraphEnderecoContato>
                                    </div>
                                </EnderecosItem>
                                <EnderecosItem>
                                    <div>
                                        <ImageEnderecoContato src={local} alt="" />
                                    </div>
                                    <div>
                                        <ParagraphEnderecoContato>Endereço: xxxxxx-xxxxx, 00000000</ParagraphEnderecoContato>
                                    </div>
                                </EnderecosItem>
                            </EnderecosContato>
                            <SocialeContato>
                                <Link to=""><img src={ig} alt="" /></Link>
                                <Link to=""><img src={tt} alt="" /></Link>
                                <Link to=""><img src={fb} alt="" /></Link>
                                <Link to=""><img src={ln} alt="" /></Link>
                            </SocialeContato>
                        </ContatoLeft>
                        <ContatoLine>
                            <LMid />
                        </ContatoLine>
                        <ContatoRight>
                            <ContatoMsg>
                                <h2>Ou envie uma mensagem</h2>    
                            </ContatoMsg>
                            <GetContatos>
                                <p>Nome</p>
                                <CampoTextoContato type="text" />
                            </GetContatos>
                            <GetContatos>
                                <p>Email</p>
                                <CampoTextoContato type="text" />
                            </GetContatos>
                            <GetContatos>
                                <p>Bio (max. 300 caracteres)</p>
                                <CampoTextoAreaContato maxLength={300}></CampoTextoAreaContato>
                                <BtnContato> Enviar
                                </BtnContato>
                            </GetContatos>
                        </ContatoRight>
                    </ContatosContainer>
                </ContatosPage>
            </Contatos>
        </PageDefault>
    );
}