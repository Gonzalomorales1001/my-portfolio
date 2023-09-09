import React, { useState } from 'react';
import mockup from '../assets/img/projects/projects-mockup.png'

const Projects = () => {
    return (
        <section className="vh-100" id='AboutMe'>
            <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                <div>
                    <h2 className="text-aqua fw-700">&lt;<span className="text-light">Mis Proyectos</span>&nbsp; &frasl; &gt;</h2>
                    <h4 className='fw-200'>Quiero mostrarte parte de mi trayectoria con proyectos y prácticas que he realizado con el tiempo...</h4>
                </div>
                <div className="container projects">

                </div>
            </div>
        </section>
    )
}

export default Projects