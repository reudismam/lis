import React, {useState, useEffect, useRef} from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import PageDefault from '../DefaultPage';
import CriarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import NewInteresse from './newInteresse.js';
import NewPublicacoes from './newPublicacoes.js';
import NewProjetos from './newProjetos.js'
import './styles.css';


const initialValue = {
    nome: '',
    sobrenome: '',
    uploadImage: '',
    email: '',
    telefone: '',
    biografia: '',
    posicao: '',
    areaInteresse: ''
}

export default function Criarconta() {
    const [values, setValues] = useState(initialValue)
    const history = useHistory();

    const [imagePreviewUrl, setImagePreviewUrl] = useState<any>();

    function onChange(ev: any){
        ev.preventDefault();
        const {name, value} = ev.target;
        setValues({ ...values, [name]: value });
        
        /*let reader = new FileReader();
        let file = ev.target.files[0];
        reader.onloadend = () => {
            setValues({...values, [name]: reader.result});
        }
        reader.readAsDataURL(file);*/
    }
    
    function onSubmit(ev: any){
        ev.preventDefault();
        
        if(values.posicao === "discente"){
        axios.post('http://localhost:5000/discentes', values)
            .then((response) => {
                history.push('/discentes')
            })
        }

        if(values.posicao === "docente"){
            axios.post('http://localhost:5000/docentes', values)
                .then((response) => {
                    history.push('/docentes')
                })
            }
        }

        
        
    return (
        
    <PageDefault
        imageSrc={CriarContaImg}
        imageAlt="Imagem Criar Conta"
        title="Quase tudo pronto para se tornar um membro do grupo"
        description="Insira seus dados cadastrais nos campos abaixo"
    >
            <form onSubmit = {onSubmit} encType="multipart/form-data">
            <div className="criar-conta">
                <div className="criar-conta-cad">
                    <div className="criar-conta-content">
                        <h3 className="tInicial">Seus dados</h3><br/>
                        <div className="row-one">
                            <div id="img-container">
                                {values.uploadImage &&
                                <img id="preview" style={{width: '100px', height: '100px'}} src={values.uploadImage}/>
                                }
                            </div>
                            <label htmlFor="uploadImage" >
                                <input id="uploadImage" type="file" className="img-input" name="uploadImage" accept="image/jpg, image/png, image/jpeg, image/gif" onChange={onChange} />
                            </label>
                            
                            
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
                                <input  type="number" id="whatsapp" name="whatsapp" className="input-right-two" placeholder="(__)_____-____" onChange={onChange} required />
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
                            <NewInteresse name="areaInteresse" value="areaInteresse" onChange = {onChange}/>
                        </div>

                        <div className="row-five">
                            <div className="row-five-title">
                                <p className="rt-left">Publicações</p>
                                <p className="rt-right">+Publicação</p>
                            </div>
                            <br/>
                            <hr className="line"/>
                            <br/>
                            <NewPublicacoes onChange = {onChange}/>
                            
                        </div>
                        <div className="row-six">
                            <h1>Projetos</h1>
                            <NewProjetos />
                        </div>
                        <button className="row-six-btn" type="submit">Enviar</button>

                    </div>
                </div>
            </div>
            </form>
         </PageDefault>
         
    );
}