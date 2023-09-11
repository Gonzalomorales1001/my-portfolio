import React, { useContext } from 'react';
import '../css/AboutMe.css';
import cena from '../assets/img/cena2.jpg';
import { DarkModeContext } from '../App';

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
                            <p className="about-me__p d-none d-md-block">Me considero una persona que ama los retos y los desafíos nuevos, ya que eso me ha hecho llegar hasta aquí.</p>
                        </div>
                        <div>
                            <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Stack</span>&nbsp; &frasl; &gt;</h4>
                            <div class="stack fw-200 d-none d-md-flex">
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\html.svg" alt="HTML5" class="tools html" />
                                    <span class="d-block my-2">HTML</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\css.svg" alt="CSS" class="tools css" />
                                    <span class="d-block my-2">CSS</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\bootstrap.svg" alt="Bootstrap" class="tools bootstrap" />
                                    <span class="d-block my-2">Bootstrap</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\javascript.svg" alt="JavaScript" class="tools javascript" />
                                    <span class="d-block my-2">JavaScript</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\react.svg" alt="ReactJS" class="tools react" />
                                    <span class="d-block my-2">ReactJS</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\nodejs.svg" alt="NodeJS" class="tools node" />
                                    <span class="d-block my-2">NodeJS</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\express-white.svg" alt="Express" class="tools express" />
                                    <span class="d-block my-2">Express</span>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src="assets\git.svg" alt="GIT" class="tools git" />
                                    <span class="d-block my-2">GIT</span>
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