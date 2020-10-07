import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import ProjetosPage from '../../components/ProjetosPage';
import ProjetoImg from '../../assets/images/Projeto/projeto.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const ProjetosContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Search = styled.div`
    width:100%;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    hr{
        width: calc(100% - 230px);
        border: 1px solid #D0CDE1;
    }
    input{
        font-size: 1.2rem;
        border-radius: 8px;
        border: 2px solid var(--blue1);
        background-color: rgba(240, 240, 247, 0.25);
    }
    .search-icon {
        position: absolute;
        font-size: 1.6rem;
        top: 20px;
        right: 15px;
        cursor: pointer;
        color: var(--blue1);
    }
    @media(min-width:768px){
        hr{
            width: calc(100% - 310px);
        }
        input{
            font-size: 1.4rem;
            width: 300px;
        }
    }
    @media(min-width:1280px){
        hr{
            width: calc(100% - 360px);
        }
        input{
            width: 350px;
        }
    }
`
export default function Projeto() {
    return (
        <PageDefault
            imageSrc={ProjetoImg}
            imageAlt="Imagem Projeto"
            title="Veja alguns de nossos projetos!"
            description="Buscamos te deixar bem interado sobre o assunto, aqui você pode acompanhar o que estamos fazendo ..."
        >
            <ProjetosContainer>
                <Search>
                    <hr />
                    <input type="text" placeholder="pesquisar" />
                    <AiOutlineSearch className="search-icon" />
                </Search>
                <ProjetosPage />
            </ProjetosContainer>
        </PageDefault>
    );
}