import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../DefaultPage';
import ContatoImg from '../../assets/images/Contato/contato.svg';
import ig from '../../assets/images/Contato/ig.png';
import tt from '../../assets/images/Contato/tt.png';
import fb from '../../assets/images/Contato/fb.png';
import ln from '../../assets/images/Contato/ln.png';
import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';
import { AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai';

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
    @media (max-width: 589px){
        margin: 30px 10px;
        padding: 10px;
        flex-direction: column;
    }
    @media (min-width:401px) {
        margin: 30px 10px;
        padding: 10px;
    }
`
const ContatoDiv = styled.div`
    width: 100%;
    color: var(--color-pagina-textoazulclaro);
    flex-direction: column;
    @media (max-width: 400px){
        padding: 10px;
    }
    @media (min-width:589px){
        width: 50%;
        padding: 30px;
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
    margin: 15px 0;
    @media (min-width:589px) and (max-width: 999px) {
        padding: 30px 20% 30px 0;
    }
    @media (min-width:1000px) {
        padding: 30px 60% 30px 0;
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
const ParagraphEnderecoContato = styled.p`
    font-weight: bold;
    color: var(--color-pagina-textoazul);
`
const SocialeContato = styled.div`
    width: 60%;
    height: 30;
    display: flex;
    justify-content: space-between;
    @media (min-width:589px){

    }
`
const ContatoLine = styled.div`
    width: 1px;
    @media (max-width: 589px){
        width: 100%;
    }
`
const LMid = styled.hr`
    margin-top: 40px;
    width: 1px;
    height: 88%;
    border: 1px solid #2BB3EB;
    @media (max-width: 589px){
        margin-top: 20px;
        margin-left: 30px;
        width: 75%;
        height: 1px;
    }
`
const ContatoMsg = styled.div`
    color: var(--color-pagina-texto);
    margin-bottom: 50px;
    @media(min-width: 590px){
        margin-top: 35px;
        margin-bottom: 15px;
    }
`
const GetContatos = styled.div`
    padding-bottom: 30px;
    p{
        margin-bottom: 5px;
    }
`
const CampoTextoContato = styled.input`
    width: 100%;
    border-radius: 8px;
    border: 1px solid #E6E6F0;
    padding: 5px;
    font-size: 20px;
    color: #424242;
    background-color: #E6E6F0;
    @media (max-width: 400px){
        height: 45px;
    }
    @media (min-width:401px){
        height: 50px;
    }
`
const CampoTextoAreaContato = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    min-height: 300px;
    max-height: 300px;
    padding: 5px;
    font-size: 18px;
    color: #424242;
    font: roboto;
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
const ContatoIcon = styled.div`
    font-size: 1.4rem;
    margin-right: 5px;
`

export default function Contato() {
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
                        <ContatoDiv>
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
                                    <ContatoIcon>
                                        <AiOutlineGlobal />
                                    </ContatoIcon>
                                    <div>
                                        <ParagraphEnderecoContato>sitelisexample.com.br</ParagraphEnderecoContato>
                                    </div>
                                </EnderecosItem>
                                <EnderecosItem>
                                    <ContatoIcon>
                                        <AiOutlineMail />
                                    </ContatoIcon>
                                    <div>
                                        <ParagraphEnderecoContato>sitelisexample@.com.br</ParagraphEnderecoContato>
                                    </div>
                                </EnderecosItem>
                                <EnderecosItem>
                                    <ContatoIcon>
                                        <GoLocation />
                                    </ContatoIcon>
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
                        </ContatoDiv>
                        <ContatoLine>
                            <LMid />
                        </ContatoLine>
                        <ContatoDiv>
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
                        </ContatoDiv>
                    </ContatosContainer>
                </ContatosPage>
            </Contatos>
        </PageDefault>
    );
}