import styled from 'styled-components';


interface MenuIconProps {
    open?: boolean;
}

const MenuIcon = styled.div`
    font-size: 2.5rem;
    color: ${(props: MenuIconProps) => props.open ?  'var(--color-pagina-texto)' : 'var(--color-cotainer-texto)'};
    z-index: 2;
    
    @media(min-width: 1200px){
        display: none;
    }
`

export default MenuIcon;