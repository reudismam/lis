import React from 'react';
import { Link } from "react-router-dom";
import mapImg from './imgs/map.png'
import emailImg from './imgs/email.png'
import instaImg from './imgs/insta.png'
import twittImg from './imgs/twitter.png'
import faceImg from './imgs/face.png'
import './styles.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-column">
                    <p className="footer-column-title">Apoio</p>
                    <br />
                    <p className="footer-column-text">Ufersa</p>
                </div>
                <div className="footer-column">
                    <p className="footer-column-title">Desenvolvedores</p>
                    <p className="footer-column-text">Renan Santana</p>
                    <p className="footer-column-text">Fernando Dutra</p>
                    <p className="footer-column-text">Emanuel Bruno</p>
                    <p className="footer-column-text">Reudisman Rolim</p>
                </div>
                <div className="footer-column">
                    <p className="footer-column-title">Informações</p>
                    <br />
                    <div className="footer-info-img">
                        <img alt="localização" src={mapImg} className="img" />
                        <p>
                            Rodovia BR-226, s/n, Pau dos <br />
                                Ferros-RN, 59900-000
                            </p>
                    </div>
                    <div className="footer-info-img">
                        <img alt="e-mail" src={emailImg} className="img" />
                        <p>lis.ufersa@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-social">
                <div className="footer-info-img">
                    <img alt="instagram" src={instaImg} className="img" />
                    <Link to="" className="footer-info-text">
                        lis.ufersa
                        </Link>
                </div>
                <div className="footer-info-img">
                    <img alt="instagram" src={twittImg} className="img" />
                    <Link to="" className="footer-info-text">
                        lis_ufersa
                        </Link>
                </div>
                <div className="footer-info-img">
                    <img alt="facebook" src={faceImg} className="img" />
                    <Link to="" className="footer-info-text">/lis.ufersa</Link>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="footer-bottom">
                <p>© Todos os direitos reservados</p>
            </div>
        </div>
    );
}