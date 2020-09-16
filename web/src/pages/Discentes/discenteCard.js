import React from 'react';


const discenteCard = ({ discente }) => (
    <div className="discente-card">
        <img src={discente.uploadImage} />
        <h3>Nome: {discente.nome} </h3>
        <h3>Sobrenome: {discente.sobrenome}</h3>
        <h3>Email: {discente.email}</h3>
        <h3>Telefone: {discente.whatsapp}</h3>
        <h3>Biografia: {discente.bio}</h3>
        <h3>Posição: {discente.posicao}</h3>
        <br/>
        <h2>Interesse</h2>
        <li value="areaInteresse" name="areaInteresse" >{discente.areInteresse}</li>
            {/*{ discente.map((item, index) => 
                <li key={index} name="areaInteresse" >{areaInteresse}</li>)
            }*/}
        <hr/>
        <br/><br/>
    </div>
)




export default discenteCard