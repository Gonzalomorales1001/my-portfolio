import React, { useContext } from 'react';
import '../css/AboutMe.css';
import cena from '../assets/img/cena2.jpg';
import { DarkModeContext } from '../App';
import HTML from '../assets/stack/html.svg'
import CSS from '../assets/stack/css.svg'
import Bootstrap from '../assets/stack/bootstrap.svg'
import JavaScript from '../assets/stack/javascript.svg'
import ReactJS from '../assets/stack/react.svg'
import Node from '../assets/stack/nodejs.svg'
import Express from '../assets/stack/express-white.svg'
import GIT from '../assets/stack/git.svg'

const AboutMe = () => {
    const { dark } = useContext(DarkModeContext);
    return (
        <section className={`vh-100 flex-center ${dark && 'text-light'}`} id='AboutMe'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 flex-center">
                        <div className="me-img-container">
                            <img src={cena} alt="Gonzalo Morales" />
                            <div className="me-img-container__shadow">
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 text-center text-md-start">
                        <div>
                            <h2 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Sobre Mí</span>&nbsp; &frasl; &gt;</h2>
                            <p className="about-me__p">Empecé en el desarrollo web a mediados del 2022 en <a className="text-aqua text-decoration-none" href="https://rollingcodeschool.com/" target="__blank">Rolling Code School.</a> Actualmente sigo aprendiendo tecnologías nuevas, completando nuevos retos y mejorando mis habilidades técnicas.</p>
                            <p className="about-me__p">Me considero una persona que ama los retos y los desafíos nuevos, ya que eso me ha hecho llegar hasta aquí.</p>
                        </div>
                        <div className='d-none d-md-block'>
                            <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Stack</span>&nbsp; &frasl; &gt;</h4>
                            <div className="stack fw-light d-flex">
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={HTML} alt="HTML5" className="tools html" />
                                    <span className="d-block my-2">HTML</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={CSS} alt="CSS" className="tools css" />
                                    <span className="d-block my-2">CSS</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={Bootstrap} alt="Bootstrap" className="tools bootstrap" />
                                    <span className="d-block my-2">Bootstrap</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={JavaScript} alt="JavaScript" className="tools javascript" />
                                    <span className="d-block my-2">JavaScript</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={ReactJS} alt="ReactJS" className="tools react" />
                                    <span className="d-block my-2">ReactJS</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={Node} alt="NodeJS" className="tools node" />
                                    <span className="d-block my-2">NodeJS</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={Express} alt="Express" className="tools express" />
                                    <span className="d-block my-2">Express</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={GIT} alt="GIT" className="tools git" />
                                    <span className="d-block my-2">GIT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe