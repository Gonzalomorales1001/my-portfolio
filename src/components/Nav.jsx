import React, { useContext, useEffect, useState } from 'react';
import '../css/Nav.css'
import { DarkModeContext } from '../App';
import logoLight from '../assets/img/logo-transparent.png';
import logoDark from '../assets/img/logo-transparent-dark.png'
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { dark, toggleDarkMode } = useContext(DarkModeContext);
    const [t, i18n] = useTranslation("global");
    const [scrolled, setScrolled] = useState(false);
    const [rotated, setRotated] = useState(false);

    return (
        <nav className={`navbar navbar-expand-md text-light p-0`}>
            <div className="container">
                <div className='my-3'>
                    <a className="navbar-brand" href="#">
                        <img className='nav-logo' src={logoLight} alt="Gonzalo Morales Logo" />
                    </a>
                </div>
                <div className="navbar-language">
                    <i className="fa fa-globe"></i>
                    <select name="nav-lang" id="nav-lang" onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                    </select>
                </div>
                <button className="navbar-toggler" type="button" onClick={() => setRotated(!rotated)} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${rotated && 'rotate-90-ccw'}`}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link active" href="#Me">{t("Nav.home")}</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#AboutMe">{t("Nav.aboutMe")}</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#Projects">{t("Nav.projects")}</a>
                        </li>
                        {/* <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#Resources">Recursos</a>
                        </li> */}
                        <li className="nav-item d-flex justify-content-center align-items-center my-3">
                            <a className="nav-link" href="#ContactMe">{t("Nav.contact")}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav