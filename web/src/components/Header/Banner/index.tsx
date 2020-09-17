import React from 'react';
import styled from 'styled-components';
import BannerImg from '../BannerImg';
import BannerMessage, {MessageContainer} from '../BannerMessage';

const BannerContainer = styled.div`
    background-color: var(--color-container);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-areas:
            "message figure";
            
        & ${BannerImg} {
            grid-area: figure;
            justify-self: end;
        }

        & ${MessageContainer} {
            grid-area: message;
        }

    }
`

export interface BannerProps{
    imageSrc?: string;
    imageAlt?: string;

}

const Banner: React.FC<BannerProps> = (props) => {
    return(
        <BannerContainer>
            <BannerImg 
                src={props.imageSrc}
                alt={props.imageAlt}
            />
            <BannerMessage />

        </BannerContainer>
    );
}

export default Banner;