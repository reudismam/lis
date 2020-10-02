import React from 'react';
import styled from 'styled-components';
import Page from '../Page';

const PageContainer = styled.main`
    width: 90%;
    
`

const Container: React.FC = (props) => {
    return (
        <Page>
            <PageContainer>
                {props.children}
            </PageContainer>
        </Page>
    );
}

export default Container;