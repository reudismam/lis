import React from 'react';
import styled from 'styled-components';
import PageDefault from '../DefaultPage';
import Portifolios from '../../components/Portifolios';
import PortifolioPost from '../../components/PortifolioPost';
import PortfolioImg from '../../assets/images/Portifolio/portfolio.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const PortifolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
const Line = styled.div`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    hr{
        width: calc(100% - 140px);
        border: 1px solid #D0CDE1;
    }
    h2{
        width: 130px;
        font-size: 1.2rem;
        color: var(--color-pagina-textoazul);
    }
`

export default function Portifolio() {
    return (
        <PageDefault
            imageSrc={PortfolioImg}
            imageAlt="Imagem Portfolio"
            title="Portfólio"
            description="Criações que nos orgulham"
        >
            <PortifolioContainer>
                <Search>
                    <hr />
                    <input type="text" placeholder="pesquisar" />
                    <AiOutlineSearch className="search-icon" />
                </Search>
                <PortifolioPost />
                <Line>
                    <hr />
                    <h2>Semana passada</h2>
                </Line>
                <Portifolios />
            </PortifolioContainer>
        </PageDefault>
    );
}