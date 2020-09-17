import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

interface MenusProps {
    open?: boolean;
}

const MenuContainer = styled.div`
    margin: 0 1.6rem;
    display: flex;
    flex: 1;
    & ${MenuIcon}{
        position: fixed;
        right: 30px;
        top: 10px;
    }
`

const Menus = styled.nav`
    background-color: var(--color-cotainer-texto);
    width: 200px;
    height: 100vh;
    position: fixed;
    z-index: 1;
    right: 0px;
    top: 0;
    transform: ${(props: MenusProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: 0.3s;

    @media(min-width: 1200px){
        transform: none;
        background-color: transparent;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
`

export default function Menu() {

    const [open, setOpen] = useState(false);

    return (
        <MenuContainer>
            {!open &&
                <MenuIcon open={open} onClick={()=> setOpen(!open)}>
                    <FiMenu />
                </MenuIcon>
            }
            {open &&
                <MenuIcon open={open} onClick={()=> setOpen(!open)}>
                    <RiCloseFill />
                </MenuIcon>
            }
            <Menus open={open}>
                <MenuList>
                    <li><Link to="/" className="MenuLink">Início</Link></li>
                    <li><Link to="/sobre" className="MenuLink">Sobre</Link></li>
                    <li><Link to="/pesquisadores" className="MenuLink">Pesquisadores</Link></li>
                    <li><Link to="/publicacoes" className="MenuLink">Publicações</Link></li>
                    <li><Link to="/projeto" className="MenuLink">Projetos</Link></li>
                    <li><Link to="/portifolio" className="MenuLink">Portfólio</Link></li>
                    <li><Link to="/noticias" className="MenuLink">Notícias</Link></li>
                    <li><Link to="/editais" className="MenuLink">Editais</Link></li>
                    <li><Link to="/parceiros" className="MenuLink">Parceiros</Link></li>
                    <li><Link to="/contato" className="MenuLink">Contato</Link></li>
                </MenuList>
                <MenuList>
                    <li><Link to="/login" className="MenuLink">Sair</Link></li>
                    <li><Link to="/criarconta" className="MenuLink">Perfil</Link></li>
                </MenuList>
            </Menus>
        </MenuContainer>
    );
}