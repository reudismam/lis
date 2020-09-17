import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer';
import { BannerProps } from '../../components/Header/Banner';


const DefaultPage: React.FC<BannerProps> = (props) => {
    return (
        <>
            <Header  {...props} />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default DefaultPage;


