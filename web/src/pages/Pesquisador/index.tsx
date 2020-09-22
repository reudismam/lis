import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import DiscenteCard from './../Discentes/discenteCard'

export default function Pesquisador(){

    const [discent, setDiscent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/discentes') //Limitando quantidade de itens ta tela ?_limit=5'
        .then((response) => {
            setDiscent(response.data)
        });
    },[]);

    return(
        <>
        <h1>Pesquisador</h1>
            {discent.map(( discente, index) => (
                <DiscenteCard key={index} discente = {discente} />
            ))}
            </>
    );
}