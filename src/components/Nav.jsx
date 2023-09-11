import React, { useContext, useEffect, useState } from 'react';
import '../css/Nav.css'
import { DarkModeContext } from '../App';
import logoLight from '../assets/img/logo-transparent.png';
import logoDark from '../assets/img/logo-transparent-dark.png'

const Nav = () => {
    const { dark, toggleDarkMode } = useContext(DarkModeContext);
    const [scrolled, setScrolled] = useState(false);

    return (
        <nav className={`navbar navbar-expand-md text-light p-0`}>
            <div className="container">
                <div className='my-3'>
                    <a className="navbar-brand" href="#">
                        <img className='nav-logo' src={logoLight} alt="Gonzalo Morales Logo" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link active" href="#Me">Inicio</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#AboutMe">Sobre Mí</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#Projects">Mis Proyectos</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#Resources">Recursos</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#ContactMe">Contáctame</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav