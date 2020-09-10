import React from 'react';


const docenteCard = ({ docente }) => (
    <div>
        <img src={docente.uploadImage} />
        <h3>Nome: {docente.nome} </h3>
        <h3>Sobrenome: {docente.sobrenome}</h3>
        <h3>Email: {docente.email}</h3>
        <h3>Telefone: {docente.whatsapp}</h3>
        <h3>Biografia: {docente.bio}</h3>
        <h3>Posição: {docente.posicao}</h3>
        <br/><br/>
    </div>
)




export default docenteCard