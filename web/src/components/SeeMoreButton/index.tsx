import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SeeMoreButton = styled(Link)`
    margin: 10px auto;
    display: flex;
    background-color: var(--color-container);
    width: 90%;
    height: 3.5rem;
    border: 1px solid var(--color-descriptoins);
    justify-content: center;
    align-items: center;
    color: var(--color-botao-texto);
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 0.8rem;
    margin-bottom: 20px;

    @media(min-width: 768px){
        margin-right: 0;
        width: 200px;
    }
`
export default SeeMoreButton;