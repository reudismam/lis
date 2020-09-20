import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../Menu';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--color-navibar);
    height: 4rem;
`

export default function TopBar(){
    return(
        <TopBarContainer>
            <Logo />
            <Menu />
        </TopBarContainer>
    );
}