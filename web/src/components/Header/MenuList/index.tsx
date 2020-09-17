import styled from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;

    li{
        margin-bottom: 1rem;
        font-size: 1.3rem;
        color: var( --color-descriptoins);
    }
    .MenuLink{
        color: var( --color-descriptoins);
        text-decoration: none;
    }

    @media(min-width: 1200px){
        display: flex;
        margin: 0;
        li {
            margin-left: 1rem; 
            margin-bottom: 0;
        }
        .MenuLink{
            color: var(--color-botao-texto);
        }
    }
    
`

export default MenuList;