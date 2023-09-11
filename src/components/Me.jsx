import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import '../css/Presentation.css'

const Me = () => {
    const { dark } = useContext(DarkModeContext);
    return (
        <section id="Me">
            <div className={`vh-100 ${dark ? 'presentation-dark-wallpaper' : 'presentation-light-wallpaper'}`}>
                <div className="overlay">
                    <div className="presentation">
                        <div className={`presentation__text ${dark && 'text-light'}`}>
                            <div className="container d-flex justify-content-center align-items-center h-100">
                                <div className="row">
                                    <div className="col ms-lg-5 pt-3 pt-lg-0">
                                        <h3 className="text-secondary">¡Bienvenidos a mi portafolio!</h3>
                                        <h1 className="presentation__title">Soy <span className="text-aqua">Gonzalo Morales</span></h1>
                                        <h4 className={`presentation__subtitle ${dark && 'presentation__subtitle--dark'}`}>Desarrollador Web</h4>
                                        <div className="mt-3">
                                            <h2 className="text-aqua text-uppercase">&lt;<span className="text-light">Quién Soy</span>&nbsp; &frasl; &gt;</h2>
                                            <p className="presentation__p">Empecé en el desarrollo web a mediados del 2022 en <a className="text-aqua text-decoration-none" href="https://rollingcodeschool.com/" target="__blank">Rolling Code School.</a> Actualmente sigo aprendiendo tecnologías nuevas, completando nuevos retos y mejorando mis habilidades técnicas.</p>
                                            <p className="presentation__p">Me considero una persona que ama los retos y los desafíos nuevos, ya que eso me ha hecho llegar hasta aquí.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <button className="button d-block w-100">Ver más</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Me