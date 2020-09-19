import React from 'react';
import styled from 'styled-components'
import {VIDEOS} from '../../Data/videos';

const VideoDestaqueContainer = styled.div`
    @media(min-width: 768px) {
        display: flex;
        margin-bottom: 40px;
    }
`
const  Video = styled.iframe`
    width: 100%;
    height: 315px;
    @media(min-width: 768px) {
        width: 60%;
        height: 500px;
        border-radius: 0.8rem;
    }
`
const Title = styled.h2`
    color: var(--color-descriptoins);
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 20px;
`
const Description = styled.div`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    height: 300px;

    @media(min-width: 768px) {
        width: 30%;
        margin-left: 20px;
        margin-top: 0;
    }
`
const Info = styled.p`
    color: var(--color-descriptoins);
    height: 160px;
    overflow: hidden;
`
export default function VideoDestaque(){
    var videoItem = VIDEOS.filter(v => v.featured === true)[0];
    return(
        <VideoDestaqueContainer>
            <Video width="560" height="315" src="https://www.youtube.com/embed/fH2AKvTv6AI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
            <Description>
                <Title>
                    {videoItem.name}
                </Title>
                <Info>
                    {videoItem.description}
                </Info>
            </Description>
        </VideoDestaqueContainer>
    );
}