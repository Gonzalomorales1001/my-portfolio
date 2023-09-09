import React from 'react';

const AboutMe = () => {
    return (
        <section className="vh-100" id='AboutMe'>
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="row row-cols-1">
                    <div className="col">
                        <h2 className="text-aqua fw-700">&lt;<span className="text-light">Sobre Mi</span>&nbsp; &frasl; &gt;</h2>
                        <p className="fw-300">Empecé en el desarrollo web a mediados del 2022 en <a className="text-aqua text-decoration-none" href="https://rollingcodeschool.com/" target="__blank">Rolling Code School.</a> Actualmente sigo aprendiendo tecnologías nuevas, completando nuevos retos y mejorando mis habilidades técnicas.</p>
                        <p className="fw-300">Me considero una persona que ama los retos y los desafíos nuevos, ya que eso me ha hecho llegar hasta aquí.</p>
                        <h5>Educación</h5>
                        <ul>
                            <li>
                                <h6 className="text-aqua">Full-Stack MERN</h6>
                                <p className="fw-200 text-aqua-dark fst-italic">
                                    Rolling Code School
                                    <br />
                                    <span className="text-secondary">2022 - 2023</span>
                                </p>
                            </li>
                            <li>
                                <h6 className="text-aqua">Tecnicatura Universitaria en Programación</h6>
                                <p className="fw-200 text-aqua-dark fst-italic">
                                    Universidad Tecnológica Nacional - FRT - Argentina
                                    <br />
                                    <span className="text-secondary">2023 - Presente</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe