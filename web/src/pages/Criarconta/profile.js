import React, {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import PageDefault from '../DefaultPage';

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

export default function Criarconta( { id } ) {
    const [values, setValues] = useState(initialValue)
    const history = useHistory();
    
    useEffect(() => {
        if(id){
            axios.get(`http://localhost:5000/discentes/${id}`)
                .then((response) => {
                    setValues(response.data);
                })
        }
    }, [])

    return (
    <PageDefault
        title="Página do Pesquisador"
        description="Veja suas atribuições no momento, deixe seus dados sempre atualizados!"
    >
                                    <img id="preview" style={{width: '100px', height: '100px'}} src={values.uploadImage} value={values.uploadImage}/>
                            
                                    <h4 htmlFor="nome" className="title-area">Nome</h4>
                                    <i value={values.nome}>{values.nome}</i><br/>

                                <br/>

                                    <h4 htmlFor="sobrenome" className="title-area">Sobrenome</h4>
                                    <i value={values.sobrenome}>{values.sobrenome}</i>
                            <br/>

                                <h4 className="title-area" htmlFor="email">E-mail</h4>
                                <i value={values.email}>{values.email}</i>
                            <br/>
                                <h4 htmlFor="telefone" className="title-area" >Whatsapp</h4>
                                <i value={values.telefone}>{values.telefone}</i>
                        <br/>
                        <div id="cursodiv">
                            <h4 htmlFor="curso" className="title-area">Curso</h4>
                            <i value={values.curso}>{values.curso}</i>
                            <hr/>
                        </div>


                            <p className="title-area">Categoria</p>
                            <i value={values.posicao}>{values.posicao}</i>
                        <br/><br/><br/>
                        
                            <p className="title-area">Função  </p>
                            <i value={values.funcao}>{values.funcao}</i>
                        <br/><br/><br/>
                        
                            <p className="title-area">Titulação</p>
                            <i value={values.titulacao}>{values.titulacao}</i>
                    <br/><br/><br/>

                        <div id="row-three">
                            {values.biografia.length === 0 ? <div className="bio-vazia">
                                                                <h3>{values.nome} não escreveu nenhuma biografia!</h3>
                                                            </div> : <div className="bio-cheia">
                                                                                                    <h2>BIOGRAFIA</h2>
                                                                                                    <em value={values.biografia}>{values.biografia}</em>
                                                                                                </div> }
                            
                        </div>
                            
                        <br/><br/><br/>
                        
                        <div className="row-four">
                        {values.areaInteresse === 0 ? <div className="vazia"><h3>{values.nome} não possui nenhuma área de interesse!</h3></div> : 
                            
                                values.areaInteresse.map((area, index) => {
                                    return (
                                        <div key={`area of interest ${index}`}>
                                            <h2>Area de interesse</h2>
                                        <i value={values.areaInteresse.area}>{area}</i>
                                        </div>
                                    );
                                })}
                        </div>

                        <div className="row-five">
                            {
                                values.publicacao === 0 ? <div className="vazio"><h3>{values.nome} não possui nenhuma Publicação!</h3></div> :

                                values.publicacao.map((publicacao, index) => {
                                    return (
                                        <div className="div-publicacao" key={`Publicacao ${index}`} >
                                            <p className="title-campo">Publicações</p><br/>
                                                <div>
                                                    <p className="title-area" value={publicacao.referencia}>{publicacao.referencia}</p>
                                                </div>
                                                <br/><br/>
                                                <div>
                                                <p className="title-area" value= {publicacao.ano}>{publicacao.ano}</p>
                                                </div>
                                        </div>
                                    );
                                })
                            }                
                        </div>
                        
                        <hr/>
                        <div className="row-six">
                            {
                                values.projeto === 0 ? <div className="vazio"><h3>{values.nome} não possui nenhum Projeto!</h3></div> :
                                values.projeto.map((projeto, index) => {
                                    return (
                                        
                                        <div key={`Projeto ${index}`}>
                                            <p className="title-campo">Projetos</p><br/>
                                            <div className="div-publicacao">
                                                <div>
                                                    <p className="title-area" value= {projeto.titulo}>{projeto.titulo}</p>
                                                </div>
                                                <div>
                                                    <p className="title-area" value= {projeto.ano}>{projeto.ano}</p>
                                                </div>
                                            </div><br/><br/>
                                            <p className="title-area" value={projeto.descricao}>{projeto.descricao}</p>
                                            
                                        </div>
                                    );
                                })
                            }
                        </div>
         </PageDefault>
         
    );
}