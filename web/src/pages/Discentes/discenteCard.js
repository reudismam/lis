import React from 'react';


const discenteCard = ({ discente }) => (
    <div>
        <img src={discente.uploadImage} />
        <h3>Nome: {discente.nome} </h3>
        <h3>Sobrenome: {discente.sobrenome}</h3>
        <h3>Email: {discente.email}</h3>
        <h3>Telefone: {discente.whatsapp}</h3>
        <h3>Biografia: {discente.bio}</h3>
        <h3>Posição: {discente.posicao}</h3>
        <br/><br/>
    </div>
)




export default discenteCard