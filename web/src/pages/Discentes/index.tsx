import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
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

    const Animation = useRef(null)
    useEffect(() => {
        gsap.from(Animation.current, {
            x: -30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })

    const Animation2 = useRef(null)
    useEffect(() => {
        gsap.from(Animation2.current, {
            x: 30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })
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