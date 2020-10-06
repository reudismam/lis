import styled from 'styled-components';

const Card = styled.article`
    width: 330px;
    min-height: 380px;
    max-height: 480px;
    background-color: var(--color-cotainer-texto);
    -webkit-box-shadow: 3px 4px 5px -2px rgba(84,84,84,0.56);
    -moz-box-shadow: 3px 4px 5px -2px rgba(84,84,84,0.56);
    box-shadow: 3px 4px 5px -2px rgba(84,84,84,0.56);
    margin-bottom: 30px;
    border-radius: 8px;
    
    @media(min-width: 768px){    
        width: 100%;
    }
`
export const CardTop = styled.article`
    width: 330px;
    height: 430px;
    background-color: var(--color-cotainer-texto);
    -webkit-box-shadow: 3px 4px 5px -2px rgba(84,84,84,0.56);
    -moz-box-shadow: 3px 4px 5px -2px rgba(84,84,84,0.56);
    box-shadow: 3px 4px 5px -2px rgba(84,84,84,0.56);
    margin-bottom: 30px;
    border-radius: 8px;
    @media(min-width: 768px){    
        width: 100%;
        height: 280px;
        display: flex;
    }
    @media(min-width: 1100px){    
        height: 400px;
    }
`
export default Card;