import React from 'react';


const discenteCard = ({ discente }) => (
    <div className="discente-card">
        <img src={discente.uploadImage} style={{width: '100px', height: '100px'}} />
        <h3>Nome: {discente.nome} </h3>
        <h3>Sobrenome: {discente.sobrenome}</h3>
        <h3>Email: {discente.email}</h3>
        <h3>Telefone: {discente.telefone}</h3>
        <h3>Biografia: {discente.biografia}</h3>
        <h3>Posição: {discente.posicao}</h3>
        <br/>
        <h2>Interesse</h2>
        <ul>
            {
                discente.areaInteresse.map((area) => {
                    return (
                        <li>{area}</li>
                    );
                })
            }
        </ul>
        <hr/>
        <h2>Publicacoes</h2>
        <ul>
            {
                discente.publicacao.map((publicacao) => {
                    return (
                        <li>{publicacao.titulo}</li>
                    );
                })
            }
        </ul>
        <hr/>
        <br/><br/>
    </div>
)




export default discenteCard