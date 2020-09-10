import React from 'react';
import './style.css';
import imgSucess from './img/imgSucess.png';


class Sucess extends React.Component{
    render(){
        return (
            <div> 
                <div className= "panel-azul">
                    <div className= "left">
                    <p id="p1"><strong>Seja bem vindo á nossa equipe!</strong></p>
                    <p id="p2">Parabéns, agora você faz parte do nosso time</p>
                    <button className="bAvançar">Avançar</button>
                    </div>
                    <div className="right">
                        <img alt="p" src={imgSucess} className="img"/>
                        </div>
                </div>
                
            </div>
        )
    }
}

export default Sucess 