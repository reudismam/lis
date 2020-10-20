import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import DocenteCard from './docenteCard'
import DocentesImg from '../../assets/images/Docentes/docentes.svg';
import './styles.css';
import axios from 'axios';


export default function Docente() {

    const [docent, setDocent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/docentes?_limit=3') //Limitando quantidade de itens ta tela
        .then((response) => {
            setDocent(response.data)
        });
    },[]);

    return (
        <PageDefault
            imageSrc={DocentesImg}
            imageAlt="Imagem Docentes"
            title="Esses são os docentes"
            description="Nossa lista de docentes comprometidos com a inovação"
        >
            {docent.map(( docente, index) => (
                <DocenteCard key={index} docente = {docente} />
            ))}
        </PageDefault>
    );
}