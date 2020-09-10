import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import DocenteCard from './docenteCard'
import './styles.css';
import axios from 'axios';


export default function Docente() {

    const [docent, setDocent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/docentes')
        .then((response) => {
            setDocent(response.data)
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
        <PageDefault>
            <h1 >Página de Docentes</h1>
            {docent.map(( docente, index) => (
                <DocenteCard key={index} docente = {docente} />
            ))}
        </PageDefault>
    );
}