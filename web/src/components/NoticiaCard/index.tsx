import styled from 'styled-components';

const Card = styled.article`
    max-width: 360px;
    height: 400px;
    margin-bottom: 60px;
    border-radius: 8px;

    @media(min-width: 768px){
        width: 430px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`
export const CardTop = styled.article`
    width: 330px;
    height: 100%;
    background-color: var(--color-cotainer-texto);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){    
        width: 100%;
        height: 380px;
        display: flex;
    }
    @media(min-width: 1100px){  
        height: 500px;  
    }
`
export default Card;