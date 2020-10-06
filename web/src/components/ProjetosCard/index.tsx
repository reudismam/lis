import styled from 'styled-components';

const Card = styled.article`
    height: 600px;
    overflow: hidden;
    @media(min-width: 768px){
        width: 47%;
    }
`
export const CardProjeto = styled.article`
    width: 330px;
    height: 100%;
    background-color: var(--color-cotainer-texto);
    margin-bottom: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 1px solid #EBEBF5;
    @media(min-width: 768px){    
        width: 100%;
        display: flex;
    }
`
export default Card;