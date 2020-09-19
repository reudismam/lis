import React, {useState, useEffect, useRef} from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import PageDefault from '../DefaultPage';
import './styles.css';
import CriarContaImg from './img/criar-conta.png'
import Sucess from '../Concluido/index'



const initialValue = {
    nome: '',
    sobrenome: '',
    uploadImage: '',
    email: '',
    telefone: '',
    biografia: '',
    posicao: ''
}

export default function Criarconta() {

    const WrapperRef = useRef(null);

    const [values, setValues] = useState(initialValue)
    const history = useHistory();

    function onChange(ev: any){
        ev.preventDefault();
        const {name, value} = ev.target;
        setValues({ ...values, [name]: value });
        if (ev.target.files) {
            let reader = new FileReader();
            let file = ev.target.files[0];
            reader.onloadend = () => {
                setValues({...values, [name]: reader.result});
            }
            reader.readAsDataURL(file);
        }
    }
    

    function onSubmit(ev: any){
        ev.preventDefault();
        
        if(values.posicao == "discente"){
        axios.post('http://localhost:5000/discentes', values)
            .then((response) => {
                history.push('/discentes')
            })
        }

        if(values.posicao == "docente"){
            axios.post('http://localhost:5000/docentes', values)
                .then((response) => {
                    history.push('/docentes')
                })
            }
        }

        
        
    return (
        
    <PageDefault>
            <form onSubmit = {onSubmit} encType="multipart/form-data">
            <div className="criar-conta">
                <div className="criar-conta-top">
                    <div className="criar-conta-text" >
                        <h1>Quase tudo pronto para se tornar <br/>um membro do grupo</h1><br/>
                        <p>Insira seus dados cadastrais nos campos abaixo.</p>
                    </div><br/>
                    <img alt="criar-conta imagem" className="img-criar-conta" src={CriarContaImg} />
                </div>
                
                <div className="criar-conta-cad">
                    <div className="criar-conta-content">
                        <h3 className="tInicial">Seus dados</h3><br/>
                        <div className="row-one">
                            <label htmlFor="uploadImage" >
                                <input id="uploadImage" type="file" className="img-input" name="uploadImage" accept="image/jpg, image/png, image/jpeg, image/gif" onChange={onChange} />
                            </label>
                            <div id="img-container">
                                {values.uploadImage &&
                                <img id="preview" style={{width: '50px', height: '50px'}} src={values.uploadImage} ref={WrapperRef}/>
                                }
                            </div>
                            
                            <div className="row-one-input">
                                <div className="row-one-left">
                                    <label htmlFor="nome" className="title-area">Nome</label>
                                    <input id="nome" type="text" className="input-left-one" name="nome" onChange={onChange} required />
                                </div>
                                <br/>
                                <div className="row-one-right">
                                    <label htmlFor="sobrenome" className="title-area">Sobrenome</label>
                                    <input type="text" id="sobrenome" className="input-right-one" name="sobrenome" onChange={onChange} required/>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="row-two">
                            <div className="row-two-left">
                                <label className="title-area" htmlFor="email">E-mail</label>
                                <input type="text" id="email" name="email" className="input-left-two" placeholder="example@hotmail.com" onChange={onChange} required/>
                            </div>
                            <br/>
                            <div className="row-two-right">
                                <label htmlFor="whatsapp" className="title-area" >Whatsapp</label>
                                <input type="number" id="whatsapp" name="whatsapp" className="input-right-two" placeholder="(__)_____-____" onChange={onChange} required/>
                            </div>
                            <br/>
                        </div>
                        <div className="row-three">
                            <label className="title-area" htmlFor="bio" >Bio (max 300 caracteres)</label><br/>
                            <textarea maxLength={300} name="bio" id="bio" onChange={onChange}></textarea>
                        </div>
                        <br/><br/><br/>
                        <div className="align-selected">
                        <p className="rt-left">Selecione a opção para descrever sua posição atual</p>

                        
                            <h1>Você escolheu: {values.posicao}</h1>
                            <br/>
                        <div className="div-input-class">
                            <label className="input-class"><p>discente</p>
                                <input type="radio" id="discente" value="discente" name="posicao" onChange = {onChange}  />
                            </label>
                            <label className="input-class"><p>docente</p>
                                <input type="radio" id="docente" value="docente" name="posicao" onChange = {onChange}  />
                            </label>
                            </div>
                        </div>


                        <div className="row-four">
                            <div className="row-four-title">
                                <p className="rt-left">Áreas de interesse</p>

                                


                            </div>
                            <hr className="line"/>
                            <p className="title-area">Área de interesse</p><br/>
                            <input type="text"/>
                        </div>
                        <div className="row-five">
                            <div className="row-five-title">
                                <p className="rt-left">Publicações</p>
                                <p className="rt-right">+Publicação</p>
                            </div>
                            <br/>
                            <hr className="line"/>
                            <br/>
                            <div className="row-five-title">
                                <p className="title-area-new">No formato ABNT</p><br/>
                                <p className="title-area">No formato ABNT</p><br/>
                                <p className="title-area ta-new">Ano</p><br/>
                            </div>
                            <div className="row-five-input">
                                <textarea></textarea>
                                <p className="title-area-new">Ano</p>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="row-six">
                            <div className="row-six-title">
                                <p className="rt-left">Projetos</p>
                                <p className="rt-right">+Projeto</p>
                            </div>
                            <br/>
                            <hr className="line"/>
                            <br/>
                            <div className="row-six-title">
                                <p className="title-area">Titulo</p><br/>
                                <p className="title-area">Ano</p><br/>
                            </div>
                            <div className="row-six-input">
                                <input type="text" className="rsi-left" />
                                <input type="text" className="rsi-right" />
                            </div>
                            <br/>
                            <p className="title-area" >Descrição (max. 300 caracteres</p>
                            <br/>
                            <textarea className="row-six-textarea" maxLength={300}></textarea>
                        </div>
                        <button className="row-six-btn" type="submit">Enviar</button>

                    </div>
                </div>
            </div>
            </form>
         </PageDefault>
         
    );
}