import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../assets/global.css';
import './styles.css';

const DefaultPage : React.FC = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />

        </>
    );
}

export default DefaultPage;


