import React, { useState } from 'react';
import rcTalks from '../assets/img/GIFs/rc-talks.gif';
import ipTracker from '../assets/img/GIFs/ip-tracker.gif';
import dewbie from '../assets/img/GIFs/dewbie.gif';
import matrix from '../assets/img/GIFs/matrix-todolist.gif';
import timer from '../assets/img/GIFs/timer.gif';
import { Button } from '@mui/material';

const Projects = () => {
    return (
        // <section className="vh-100 dark-gradient-3" id="Projects">
        //     <div className="container h-100 d-flex justify-content-center align-items-center">
        //         <div className="row row-cols-1">
        //             <div className="col">
        //                 <h2 className="text-aqua fw-700">&lt;<span className="text-light">Mis proyectos</span>&nbsp; &frasl; &gt;</h2>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="dark-gradient-3 vh-100" id='AboutMe'>
            <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                <div>
                    <h2 className="text-aqua fw-700">&lt;<span className="text-light">Mis Proyectos</span>&nbsp; &frasl; &gt;</h2>
                    <h4 className='fw-200'>Quiero mostrarte parte de mi trayectoria con proyectos y prácticas que he realizado con el tiempo...</h4>
                </div>
                <div className="container projects">

                </div>
                {/* <div className="container projects">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <article className="project">
                                    <header className='project-preview'>
                                        <img className='w-100 rounded-4' src={rcTalks} alt="Rolling Code Talks" />
                                    </header>
                                    <main className='mt-3'>
                                        <h5>Rolling Code Talks</h5>
                                        <p>Mi primer proyecto de maquetado, hecho con Bootstrap</p>
                                    </main>
                                    <footer className='mt-3'>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-github me-2"></i>Ver Código</a>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-external-link me-2"></i>Ver Deploy</a>
                                    </footer>
                                </article>
                            </div>
                            <div className="col">
                                <article className="project">
                                    <header className='project-preview'>
                                        <img className='w-100 rounded-4' src={ipTracker} alt="Rolling Code Talks" />
                                    </header>
                                    <main className='mt-3'>
                                        <h5>Ip Adress Tracker</h5>
                                        <p>Reto de Front-end Mentor, donde localiza la IP ingresada a través de una API</p>
                                    </main>
                                    <footer className='mt-3'>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-github me-2"></i>Ver Código</a>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-external-link me-2"></i>Ver Deploy</a>
                                    </footer>
                                </article>
                            </div>
                            <div className="col">
                                <article className="project">
                                    <header className='project-preview'>
                                        <img className='w-100 rounded-4' src={dewbie} alt="Rolling Code Talks" />
                                    </header>
                                    <main className='mt-3'>
                                        <h5>Dewbie Games</h5>
                                        <p>Una página que recopila algunos juegos para aprender programación</p>
                                    </main>
                                    <footer className='mt-3'>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-github me-2"></i>Ver Código</a>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-external-link me-2"></i>Ver Deploy</a>
                                    </footer>
                                </article>
                            </div>
                            <div className="col">
                                <article className="project">
                                    <header className='project-preview'>
                                        <img className='w-100 rounded-4' src={matrix} alt="Rolling Code Talks" />
                                    </header>
                                    <main className='mt-3'>
                                        <h5>To-Do List</h5>
                                        <p>Registra tu lista de tareas, pero con un estilo inspirado en "Matrix"</p>
                                    </main>
                                    <footer className='mt-3'>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-github me-2"></i>Ver Código</a>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-external-link me-2"></i>Ver Deploy</a>
                                    </footer>
                                </article>
                            </div>
                            <div className="col">
                                <article className="project">
                                    <header className='project-preview'>
                                        <img className='w-100 rounded-4' src={timer} alt="Rolling Code Talks" />
                                    </header>
                                    <main className='mt-3'>
                                        <h5>Timer & Stopwatch</h5>
                                        <p>Un temporizador ajustable y un Cronómetro web</p>
                                    </main>
                                    <footer className='mt-3'>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-github me-2"></i>Ver Código</a>
                                        <a href="github.com" target='__blank' className="btn btn-sm mt-2 btn-dark rounded-1 d-block"><i className="fa fa-external-link me-2"></i>Ver Deploy</a>
                                    </footer>
                                </article>
                            </div>
                        </div>
                    </div> */}
            </div>
        </section>
    )
}

export default Projects