import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import PageDefault from '../DefaultPage';
import PublicacoesImg from '../../assets/images/Publicacoes/publicacoes.svg';
import './styles.css';

export default function Publicacoes() {

    const Animation = useRef(null)
    useEffect(() => {
        gsap.from(Animation.current, {
            x: -30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })

    const Animation2 = useRef(null)
    useEffect(() => {
        gsap.from(Animation2.current, {
            x: 30,
            duration: 0.6,
            opacity: 0,
            ease: "none",
        })
    })

    return (
        <PageDefault
            imageSrc={PublicacoesImg}
            imageAlt="Imagem Publicacoes"
        >
            <div>
                <div className="publicacoes">
                    <div className="publicacoes-top">
                        <div className="publicacoes-text" ref={Animation}>
                            <h1>Aqui estão as publicações</h1><br />
                            <p>Veja suas atribuições no momento, deixe seus dados sempre atualizados!</p>
                        </div><br />
                        <img alt="publicações imagem" className="img-publicacoes" src={PublicacoesImg} ref={Animation2} />
                    </div>
                </div>
                <div className="publicacoes-container">
                    <div className="box">
                        <h2 className="data">2020</h2>
                        <p className="poster">
                            SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.
                            COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="data">2019</h2>
                        <p className="poster">
                            SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.
                            COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.
                        </p>
                    </div>
                    <div className="box">
                        <h2 className="data">2018</h2>
                        <p className="poster">
                            SOUSA, R. R.; LEITE, F. T. ; GUIMARAES, A. O. ; OLIVEIRA, A. R. . Pré-Algoritmos ? Ações de Apoio à Melhoria do Ensino de Graduação. Brazilian Journal of Development, v. 6, p. 12635-12635, 2020.
                            COSTA, R. R. ; SOUSA, R. R. . O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, v. 6, p. brazilianjourna-29496, 2020.
                        </p>
                    </div>
                </div>
            </div>
        </PageDefault>
    );
}