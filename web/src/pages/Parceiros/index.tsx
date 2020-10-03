import React from 'react';
import PageDefault from '../DefaultPage';
import ParceirosImg from '../../assets/images/Parceiros/parceiros.svg';
import UFERSA from '../../assets/images/Parceiros/ufersa.png';
import PROEC from '../../assets/images/Parceiros/proec.png';
import SEBRAE from '../../assets/images/Parceiros/sebrae.png';
import ME from '../../assets/images/Parceiros/me.png';
import RNgov from '../../assets/images/Parceiros/rngov.png';
import styled from 'styled-components';

const ParceirosContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
        padding: 0 50px 20px 50px;
    }

    @media(min-width: 1280px){
        padding: 0 100px 20px 100px;
    }

`
const ParceirosMiddle = styled.div`
    background: #F0F0F7;
    width: 100%;
    min-width: 280px;
    height: 100%;
    padding: 10px;    

`
const ParceirosMiddleContent = styled.div`
    background: #fff;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
`
const ParceirosContentItem = styled.div`
    width: 400px;
    min-width: 270px;
    height: 300px;
    padding: 20px;
    text-align: center;
    flex-direction: column;
    font-size: 19px;
    color: var(--color-descriptions);
`
const ParceirosImgItem = styled.img`
    max-width: 374px;
    max-height: 120px;
    @media (max-width: 400px){
        max-width: 200px
    }

`


export default function Parceiros() {

   
    return (
        <PageDefault
            imageSrc={ParceirosImg}
            imageAlt="Imagem Parceiros"
            title="Veja só alguns de nossos parceiros!"
            description="Temos o orgulho de ter esses patrocinadores e parceiros
            que ajudam constantemente no crescimento da educação
            e das inovações"
        > 
            
            <ParceirosContainer>
                <ParceirosMiddle>
                    <ParceirosMiddleContent>
                        <ParceirosContentItem>
                        <ParceirosImgItem src={UFERSA} /><br/>
                            <p>Universidade Federal Rural do Semi-árido</p>
                        </ParceirosContentItem>
                        <ParceirosContentItem>
                        <ParceirosImgItem src={PROEC} /><br/>
                            <p>Pró-reitoria de Extensão e Cultura</p>
                        </ParceirosContentItem>
                        <ParceirosContentItem>
                        <ParceirosImgItem src={SEBRAE} /><br/>
                            <p>Serviço Brasileiro de Apoio às Micro e Pequenas Empresas</p>
                        </ParceirosContentItem>
                        <ParceirosContentItem>
                            <ParceirosImgItem src={ME} /><br/>
                            <p>Ministério da Educação - BRASIL</p>
                        </ParceirosContentItem>
                        <ParceirosContentItem>
                        <ParceirosImgItem src={RNgov} /><br/>
                            <p>Governo do Rio Grande do Norte</p>
                        </ParceirosContentItem>
                    </ParceirosMiddleContent>
                </ParceirosMiddle>


            </ParceirosContainer>
         </PageDefault>
    );
}