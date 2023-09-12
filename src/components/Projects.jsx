import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../App';
import folder from '../assets/svg/folder.svg';
import '../css/Projects.css'

const Projects = () => {
    const { dark } = useContext(DarkModeContext);
    return (
        <section className={`vh-100 ${dark && 'text-light'}`} id='Projects'>
            <div className="container flex-column d-flex justify-content-center gap-2 h-100">
                <div className="row">
                    <div className="col">
                        <div className="aqua-border">
                            <div className="box my-4 d-flex">
                                <div className="folder">
                                    <img src={folder} alt="folder" />
                                </div>
                                <div className='ps-3'>
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Prácticas</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        Aquí podras ver las pequeñas practicas y retos que he realizado para afianzar mis conocimientos
                                    </p>
                                    <button className="button">Abrir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="aqua-border">
                            <div className="box my-4 d-flex">
                                <div className="folder">
                                    <img src={folder} alt="folder" />
                                </div>
                                <div className='ps-3'>
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Proyectos</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        En esta sección encontraras mis proyectos personales
                                    </p>
                                    <button className="button">Abrir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="aqua-border">
                            <div className="box my-4 d-flex">
                                <div className="folder">
                                    <img src={folder} alt="folder" />
                                </div>
                                <div className='ps-3'>
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Proyectos en Equipo</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        Por último, aqui guardo mis proyectos y colaboraciones hechas con otras personas
                                    </p>
                                    <button className="button">Abrir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects