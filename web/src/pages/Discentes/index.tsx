import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import DiscenteCard from './discenteCard'
import './styles.css';
import axios from 'axios';


export default function Discente() {

    const [discent, setDiscent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/discentes')
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
        <PageDefault>
            <h1 >Página de Discentes</h1>
            {discent.map(( discente, index) => (
                <DiscenteCard key={index} discente = {discente} />
            ))}
        </PageDefault>
    );
}