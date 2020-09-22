import React from 'react';


const docenteCard = ({ docente }) => (
    <div>
        <img src={docente.uploadImage} style={{width: '100px', height: '100px'}} />
        <h3>Nome: {docente.nome} </h3>
        <h3>Sobrenome: {docente.sobrenome}</h3>
        <h3>Email: {docente.email}</h3>
        <h3>Telefone: {docente.whatsapp}</h3>
        <h3>Curso: {docente.curso}</h3>
        <h3>Posição: {docente.posicao}</h3>
        <h5>Função: {docente.funcao}</h5>
        <h3>Biografia: {docente.bio}</h3>
        <h3>Posição: {docente.posicao}</h3>
        <hr/>
        <h2>Interesse</h2>
        <ul>
            {
                docente.areaInteresse.map((area) => {
                    return (
                        <li>{area}</li>
                    );
                })
            }
        </ul>
        <br/><br/>
    </div>
)




export default docenteCard