import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Criarconta/profile.js'

const Pesquisador = () => {
    const { id } = useParams();
    return (
        <div>
            <Profile id = {id ? Number.parseInt(id, 10) : null }/>
        </div>
    )
}

export default Pesquisador;