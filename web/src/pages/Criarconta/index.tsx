import React, {useState, useEffect, useRef, FormEvent} from 'react';
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
    curso: '',
    telefone: '',
    biografia: '',
    posicao: '',
    funcao: '',
    titulacao: '',
    areaInteresse: [
        ''
    ],
    publicacao: [
        {
            titulo: '',
            ano: '',
            referencia: ''
        }
    ],
    projeto: [
        {
            titulo: '',
            ano: '',
            descricao: ''
        }
    ]
}

export default function Criarconta() {
    const [values, setValues] = useState(initialValue)
    const history = useHistory();

    function onChange(ev: any){
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

    function addNewInterestArea() {
        const areas = [...values.areaInteresse, '']
        setValues({...values, "areaInteresse": areas});
    }

    function addNewPublication() {
        setValues({...values, "publicacao": 
            [
                ...values.publicacao,
                {
                    titulo: '',
                    ano: '',
                    referencia: ''
                }
            ]});
    }

    function addNewProject() {
        setValues({...values, "projeto": 
            [
                ...values.projeto,
                {
                    titulo: '',
                    ano: '',
                    descricao: ''
                }
            ]});
    }

    function setAreaInteresse(position: number, field: string, value: string) {
        const areasAtualizadas = values.areaInteresse.map((area, index) => {
            if(index === position) {
                return value;
            }
            return area;
        });
        setValues({...values, "areaInteresse": areasAtualizadas});
    }

    function setProperty(list: any [], property: string, position: number, field: string, value: string) {
        const updatedList = list.map((item, index) => {
            if(index === position) {
                return {...item, [field]: value};
            }
            return item;
        });
        setValues({...values, [property]: updatedList});
    }

    
    function onSubmit(ev: FormEvent){
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
                                    <input 
                                        id="nome" 
                                        type="text" 
                                        className="input-left-one" 
                                        name="nome" 
                                        value={values.nome} 
                                        onChange={onChange} 
                                        required />
                                </div>
                                <br/>
                                <div className="row-one-right">
                                    <label htmlFor="sobrenome" className="title-area">Sobrenome</label>
                                    <input 
                                        type="text" 
                                        id="sobrenome" 
                                        className="input-right-one" 
                                        name="sobrenome" 
                                        value={values.sobrenome}
                                        onChange={onChange} 
                                        required/>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="row-two">
                            <div className="row-two-left">
                                <label className="title-area" htmlFor="email">E-mail</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="input-left-two" 
                                    placeholder="example@hotmail.com" 
                                    value={values.email}
                                    onChange={onChange} 
                                    required/>
                            </div>
                            <br/>
                            <div className="row-two-right">
                                <label htmlFor="telefone" className="title-area" >Whatsapp</label>
                                <input  
                                    type="number" 
                                    id="whatsapp" 
                                    name="telefone" 
                                    className="input-right-two" 
                                    placeholder="(__)_____-____" 
                                    value={values.telefone}
                                    onChange={onChange} 
                                    required />
                            </div>
                            <br/>
                        </div>
                        
                        <br/><br/><br/>
                    
                        <div className="row-one-right">
                                    <label htmlFor="curso" className="title-area">Curso</label>
                                    <input 
                                        type="text" 
                                        id="curso" 
                                        className="input-right-one" 
                                        name="curso" 
                                        value={values.curso}
                                        onChange={onChange} 
                                        required/>
                        </div>


                    <div className="menu-options" style={{display: "flex",
                                                            justifyContent: "space-around"}}>
                        <div className="menu-categoria">
                            <p className="rt-left">Categoria</p>
                            <h5>Você escolheu: {values.posicao}</h5>
                            <select id="posicao" name="posicao" onChange = {onChange}>
                                <option 
                                    value="discente" 
                                    id="discente"
                                    >Discente</option>
                                <option value="docente" 
                                    id="docente" 
                                    >Docente</option>
                            </select>
                        </div>
                        <br/><br/><br/>
                        
                        <div className="menu-funcao">
                            <p className="rt-left">Função</p>
                            <h5>Você escolheu: {values.funcao}</h5>
                            <select id="funcao" name="funcao" onChange = {onChange}>
                                <option 
                                    value="membro" 
                                    id="membro"
                                    >Membro</option>
                                <option value="lider" 
                                    id="lider" 
                                    >Lider</option>
                            </select>
                        </div>
                        <br/><br/><br/>
                        
                        <div className="menu-titulacao">
                            <p className="rt-left">Titulação</p>
                            <h5>Você escolheu: {values.titulacao}</h5>
                            <select id="titulacao" name="titulacao" onChange = {onChange}>
                                <option 
                                    value="graduado" 
                                    id="graduado"
                                    >Graduado</option>
                                <option value="mestre" 
                                    id="mestre" 
                                    >Mestre</option>
                                <option value="doutor" 
                                    id="doutor" 
                                    >Doutor</option>
                            </select>
                        </div>
                    </div>

                    <div className="row-three">
                            <label className="title-area" htmlFor="biografia" >Bio (max 300 caracteres)</label><br/>
                            <textarea 
                                maxLength={300} 
                                name="biografia" 
                                id="bio" 
                                value={values.biografia}
                                onChange={onChange}>
                            </textarea>
                        </div>
                        <br/><br/><br/>
                        
                        <div className="row-four">
                            <div className="row-four-title">

                                <p className="rt-left">Áreas de interesse</p>
                            </div>
                            <hr className="line"/>
                            {
                                values.areaInteresse.map((area, index) => {
                                    return (
                                        <div key={`area of interest ${index}`}>
                                        <input type="text" placeholder="Digite uma área de interesse" value= {area} onChange={e => setAreaInteresse(index, '', e.target.value)} required ></input>
                                        <button type="button" onClick={addNewInterestArea}>Adicionar</button>
                                        </div>
                                    );
                                })
                            
                            }
                        </div>

                        <div className="row-five">
                            <div className="row-five-title">
                                <p className="rt-left">Publicações</p>
                            </div>
                            <br/>
                            <hr className="line"/>
                            <br/>
                            {
                                values.publicacao.map((publicacao, index) => {
                                    return (
                                        <div key={`Publicacao ${index}`}>
                                        <p className="title-area">Titulo</p>
                                            <input type="text" placeholder="Referência" value= {publicacao.referencia} onChange={e => setProperty(values.publicacao, 'publicacao', index, 'referencia', e.target.value)} name="referencia" required ></input>
                                            <br/>
                                            <p className="title-area">Ano da Publicação</p><br/>
                                            <input type="number" placeholder="Digite o ano da publicação" value= {publicacao.ano} onChange={e => setProperty(values.publicacao, 'publicacao', index, 'ano', e.target.value)} name="Publicacao-year" required ></input>
                                            <button type="button" onClick={addNewPublication}>Adicionar publicação</button>
                                        </div>
                                    );
                                })
                            
                            }                            
                        </div>
                        <div className="row-six">
                            <h1>Projetos</h1>
                            {
                                values.projeto.map((projeto, index) => {
                                    return (
                                        <div key={`Projeto ${index}`}>
                                            <p >Titulo</p>
                                            <input type="text" placeholder="Digite o título" value= {projeto.titulo} onChange={e => setProperty(values.projeto, 'projeto', index, 'titulo', e.target.value)} required ></input>

                                            <p className="title-area">Ano da Publicação</p><br/>
                                            <input type="number" placeholder="Digite o ano" value= {projeto.ano} onChange={e => setProperty(values.projeto, 'projeto', index, 'ano', e.target.value)} required ></input>

                                            <textarea maxLength={300} value={projeto.descricao} onChange={e => setProperty(values.projeto, 'projeto', index, 'descricao', e.target.value)}></textarea>
                                            <button type="button" onClick={addNewProject}>Adicionar projeto</button>
                                        </div>
                                    );
                                })
                            
                            }
                        </div>
                        <button className="row-six-btn" type="submit">Enviar</button>

                    </div>
                </div>
            </div>
            </form>
         </PageDefault>
         
    );
}