import React, { Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';
import TopBar from '../TopBar';


const MainHeader = styled.header`
    background-color: var(--color-navibar);
`

export default function Header() {
    return (
        <MainHeader>
            <TopBar />
        </MainHeader>
    );
}
