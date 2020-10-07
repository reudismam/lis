import React from 'react';
import { Link} from "react-router-dom";
import './styles.css';

const docenteCard = ({ docente }) => (
<div className="geral">
    <div className="discente-card">
        <div className="top">
            <img src={`../../assets/images/${docente.uploadImage}`} id="image" alt="Foto de perfil" />
            <div className="nome_sobrenome_curso">
                <p id="nome_completo">{docente.nome + ' ' + docente.sobrenome} </p>
                <p id="curso">Curso: {docente.curso}</p>
            </div>
        </div>
        <br/>
        <div className="biografia">
            <p id="bio">{docente.biografia}</p>
        </div>
        <br/><br/>
        <div className="area_interesse">
            <p id="interesse">Áreas de interesse</p>
            <ul>
                {
                    docente.areaInteresse.map((area) => {
                        return (
                            <li>{area}</li>
                        );
                    })
                }
            </ul>
        </div><br/>
        <hr style={{border: '1px solid rgb(230, 230, 230)'}} />
        <div className="pesquisador">
        <button id="btn-pesq">
                <Link to={`/pesquisador/${docente.id}`}><p id="btn_link">Pagina do pesquisador</p></Link>
            </button>
        </div>
    </div>
</div>
)




export default docenteCard