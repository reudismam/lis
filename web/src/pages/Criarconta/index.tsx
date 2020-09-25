import React, {useState, useEffect, useRef, FormEvent} from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import PageDefault from '../DefaultPage';
import CriarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import { BiCheck } from "react-icons/bi";
import { BiDuplicate } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
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

export default function Criarconta(  ) {
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

    function addNewInterestArea(e: any) {
        e.preventDefault()
        const areas = [...values.areaInteresse, '']
        setValues({...values, "areaInteresse": areas});
    }

    /*
    function deleteItem(area: any){
        const filteredItems = [...values.areaInteresse, ''].filter(values.areaInteresse =>
            values.areaInteresse !== area);
        setValues({
           ...values, "areaInteresse": filteredItems
        })
    }
    */


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

        
        
        function VerificarClique(e: any) {
            e.preventDefault();
            if(values.nome && values.sobrenome && values.email && values.telefone && values.posicao && values.curso !== ''){
                alert('Conta criada com Sucesso')
                return onSubmit(e);
            }else{
                alert('Verifique se há campos obrigatórios faltando!')
                return 
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
                        <div className="row-one">
                            <div className="image-input">
                                <div id="img-container">
                                    {values.uploadImage &&
                                    <img id="preview" style={{width: '100px', height: '100px'}} src={values.uploadImage}/>
                                    }
                                </div>
                                <label htmlFor="uploadImage" />
                                <div id="foto"><FaCamera id="logofoto"/>
                                    <input id="uploadImage" type="file" className="img-input" name="uploadImage" accept="image/jpg" onChange={onChange} />
                                </div>
                            </div>    
                            
                                <div className="row-one-left">
                                    <label htmlFor="nome" className="title-area">Nome</label><br/>
                                    <input 
                                        id="nome" 
                                        type="text" 
                                        name="nome"
                                        value={values.nome} 
                                        onChange={onChange}
                                        style = {values.nome.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}
                                        required/>
                                        
                                        {values.nome.length <= 0 ? null : <BiCheck style={{color: '#21C25E'}} />}
                                </div>
                                <br/>
                                <div className="row-one-right">
                                    <label htmlFor="sobrenome" className="title-area">Sobrenome</label><br/>
                                    <input 
                                        type="text" 
                                        id="sobrenome" 
                                        name="sobrenome" 
                                        value={values.sobrenome}
                                        onChange={onChange}
                                        style = {values.sobrenome.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}
                                        required/>
                                        {values.sobrenome.length <= 0 ? null : <BiCheck style={{color: '#21C25E'}} />}
                                </div>
                            <br/>
                        </div>
                        <div className="row-two">
                            <div className="row-two-left">
                                <label className="title-area" htmlFor="email">E-mail</label><br/>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="input-left-two" 
                                    placeholder="example@hotmail.com" 
                                    value={values.email}
                                    onChange={onChange}
                                    style = {values.email.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}
                                    required/>
                                    {values.email.length <= 0 ? null : <BiCheck style={{color: '#21C25E'}} />}
                            </div>
                            <br/>
                            <div className="row-two-right">
                                <label htmlFor="telefone" className="title-area" >Whatsapp</label><br/>
                                <input  
                                    type="number" 
                                    id="whatsapp" 
                                    name="telefone" 
                                    className="input-right-two" 
                                    placeholder="(__)_____-____" 
                                    value={values.telefone}
                                    pattern="[0-9]+$"
                                    style = {values.nome.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}
                                    onChange={onChange} 
                                    required />
                                    {values.telefone.length <= 0 ? null : <BiCheck style={{color: '#21C25E'}} />}
                            </div>
                        <br/>
                        </div>                    
                        <div id="cursodiv">
                            <label htmlFor="curso" className="title-area">Curso</label><br/>
                            <input 
                                type="text" 
                                    id="curso" 
                                    className="input-right-one" 
                                    name="curso"
                                    style = {values.curso.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}
                                    value={values.curso}
                                    onChange={onChange}
                                    required/>
                                    {values.curso.length <= 0 ? null : <BiCheck style={{color: '#21C25E'}} />}
                        </div>


                    <div className="menu-options">
                        <div className="menu-categoria">
                            <p className="title-area">Categoria</p>
                            {/*<h3 style={{color: '#21C25E'}}>{values.posicao} {values.posicao ?  <BiCheck style={{color: '#21C25E'}} /> : null}</h3>*/}
                            
                            <select id="posicao" name="posicao" onChange = {onChange}  required
                                    style = {values.posicao ? {border: '1px solid #21C25E', color: "#21C25E"} : {border: ''}}>
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
                            <p className="title-area">Função  </p>
                            
                            <select id="funcao" name="funcao" onChange = {onChange}
                                    style = {values.funcao ? {border: '1px solid #21C25E', color: "#21C25E"} : {border: ''}}>
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
                            <p className="title-area">Titulação</p>
                            <select id="titulacao" name="titulacao" onChange = {onChange}
                                    style = {values.titulacao ? {border: '1px solid #21C25E', color: "#21C25E"} : {border: ''}}>
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
                    <br/><br/><br/>
                    <div className="row-three">
                        <div id="row-three">
                            <label className="title-area" >Biografia</label><small style={{color: 'gray'}}><i>Digite algo sobre você</i></small></div>
                            <textarea
                                className="textarea"
                                style = {values.biografia.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}
                                maxLength={300} 
                                name="biografia" 
                                id="bio" 
                                value={values.biografia}
                                onChange={onChange}>
                            </textarea>
                        </div>
                        <br/><br/><br/>
                        
                        <div className="row-four">
                            <p className="title-campo">Áreas de interesse</p><br/><br/>
                            <p className="title-area">Digite uma área de interesse</p>
                            {
                                values.areaInteresse.map((area, index) => {
                                    return (
                                        <div key={`area of interest ${index}`}>
                                        
                                        <input type="text" id="area" value= {area} onChange={e => setAreaInteresse(index, '', e.target.value)} required style = {area.length !== 0 ? {border: '1px solid #21C25E'} : {border: ''}}></input>
                                        { area ? <abbr title="Adicionar outro interesse"><button id="btn" type="button" onClick={addNewInterestArea}><BiDuplicate/></button></abbr> : null}
                                        </div>
                                    );
                                })
                            
                            }
                        </div>

                        <div className="row-five">
                            <p className="title-campo">Publicações</p><br/><br/>
                            {
                                values.publicacao.map((publicacao, index) => {
                                    return (
                                        <div className="div-publicacao" key={`Publicacao ${index}`} >
                                                <div>
                                                    <p className="title-area">Titulo</p>
                                                    <input id="inputTitle" type="text"  value={publicacao.referencia} onChange={e => setProperty(values.publicacao, 'publicacao', index, 'referencia', e.target.value)} name="referencia" style = {publicacao.referencia.length !== 0 ? {border: '1px solid #21C25E'} : {border: 'none'}} ></input>
                                                </div>
                                                <br/><br/>
                                                <div>
                                                    <p className="title-area">Ano da Publicação</p>
                                                    <input type="number" id="inputNumber" value= {publicacao.ano} onChange={e => setProperty(values.publicacao, 'publicacao', index, 'ano', e.target.value)} name="Publicacao-year" style = {publicacao.ano.length !== 0 ? {border: '1px solid #21C25E'} : {border: 'none'}}></input>
                                                </div>
                                            {publicacao.referencia && publicacao.ano ? <abbr title="Adicionar outra publicação"><button className="btn" id="btnp" type="button" onClick={addNewPublication}><BiDuplicate/></button></abbr> : <div><i><small style={{color: 'gray', float: 'right', marginTop: '20px'}}>Insira os dados nos campos acima</small></i></div>}
                                        </div>
                                    );
                                })
                            }                
                        </div>
                        
                        <hr/>
                        <div className="row-six">
                            <p className="title-campo">Projetos</p><br/><br/>
                            {
                                values.projeto.map((projeto, index) => {
                                    return (
                                        <div key={`Projeto ${index}`}>
                                            <div className="div-publicacao">
                                                <div>
                                                    <p className="title-area">Titulo</p>
                                                    <input type="text" id="inputTitle" value= {projeto.titulo} onChange={e => setProperty(values.projeto, 'projeto', index, 'titulo', e.target.value)} style = {projeto.titulo.length !== 0 ? {border: '1px solid #21C25E'} : {border: 'none'}}></input>
                                                </div>
                                                <div>
                                                    <p className="title-area">Ano da Publicação</p>
                                                    <input type="number" value= {projeto.ano} onChange={e => setProperty(values.projeto, 'projeto', index, 'ano', e.target.value)} style = {projeto.ano.length !== 0 ? {border: '1px solid #21C25E'} : {border: 'none'}} ></input>
                                                </div>
                                            </div><br/><br/>
                                            <p className="title-area">Descrição</p>
                                            <textarea className="textarea" maxLength={300} value={projeto.descricao} onChange={e => setProperty(values.projeto, 'projeto', index, 'descricao', e.target.value)} style = {projeto.descricao.length !== 0 ? {border: '1px solid #21C25E'} : {border: 'none'}}></textarea>
                                            {
                                                projeto.descricao && projeto.titulo && projeto.ano ? <abbr title="Adicionar outro projeto"><button type="button" id="btn" onClick={addNewProject}><BiDuplicate/></button></abbr> : <i><small style={{color: 'gray'}}>Insira os dados em todos os campos</small></i>
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <button className="btn-send" type="submit" onClick={VerificarClique}>Enviar</button>
                    </div>
                </div>
            </div>
            </form>
         </PageDefault>
         
    );
}