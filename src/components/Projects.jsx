import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../App';
import folder from '../assets/svg/folder.svg';
import '../css/Projects.css'
import { practices, myProjects, teamProjects } from '../data/data';
import Window from './Window';

const Projects = () => {
    const { dark } = useContext(DarkModeContext);
    const [title, setTitle] = useState(null);
    const [projects, setProjects] = useState(null);
    const [showWindow, setShowWindow] = useState(false);
    const openWindow = (title, projects) => {
        setTitle(title);
        setProjects(projects);
        setShowWindow(!showWindow);
    }
    const closeWindow = () => {
        setShowWindow(false);
    }
    return (
        <section className={`section ${dark && 'text-light'} position-relative`} id='Projects'>
            {
                showWindow && (
                    <Window title={title} projects={projects} closeWindow={closeWindow} />
                )
            }
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
                                    <button className="button" onClick={() => openWindow('Prácticas', practices)}>Abrir</button>
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
                                    <button className="button" onClick={() => openWindow('Proyectos Personales', myProjects)}>Abrir</button>
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
                                    <button className="button" onClick={() => openWindow('Proyectos en Equipo', teamProjects)}>Abrir</button>
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