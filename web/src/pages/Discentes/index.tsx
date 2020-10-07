import React, { useEffect, useState } from 'react';

import PageDefault from '../DefaultPage';
import DiscenteCard from './discenteCard'
import DiscentesImg from '../../assets/images/Discentes/discentes.svg';
import './styles.css';
import axios from 'axios';


export default function Discente() {

    const [discent, setDiscent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/discentes?_limit=6,_sort=user,views&_order=desc,asc') //Limitando quantidade de itens ta tela ?_limit=5'
        .then((response) => {
            setDiscent(response.data)
        });
    },[]);

    return (
        <PageDefault
            imageSrc={DiscentesImg}
            imageAlt="Imagem Discentes"
            title="Aqui estão os discentes"
            description="Nossa lista de discentes comprometidos com a inovação"
        >
            {discent.map(( discente, index) => (
                <DiscenteCard key={index} discente = {discente} />
            ))}
        </PageDefault>
    );
}