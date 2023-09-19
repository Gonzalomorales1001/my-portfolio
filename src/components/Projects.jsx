import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../App';
import folder from '../assets/svg/folder.svg';
import '../css/Projects.css'
import { practices, myProjects, teamProjects } from '../data/data';
import { allProjects } from '../data/data';
import Window from './Window';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { dark } = useContext(DarkModeContext);
    const [t] = useTranslation("global");
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
                {/* Todos los proyectos */}
                <h2 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">{t('Projects.title')}</span>&nbsp; &frasl; &gt;</h2>
                <h4 className='projects__desc'>{t("Projects.h4")}</h4>
                <div className="row">
                    <div className="col">
                        <div className="aqua-border">
                            <div className="box my-4 d-flex">
                                <div className="folder">
                                    <img src={folder} alt="folder" />
                                </div>
                                <div className='ps-3'>
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">{t('Projects.all-title')}</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        {t('Projects.all-desc')}
                                    </p>
                                    <button className="button" onClick={() => openWindow(t('Projects.all-title'), allProjects)}>{t('Projects.button')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Practicas, proyectos, proyectos en equipo */}
                {/* <div className="row">
                    <div className="col">
                        <div className="aqua-border">
                            <div className="box my-4 d-flex">
                                <div className="folder">
                                    <img src={folder} alt="folder" />
                                </div>
                                <div className='ps-3'>
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">{t('Projects.practices-title')}</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        {t('Projects.practices-desc')}
                                    </p>
                                    <button className="button" onClick={() => openWindow({t('Projects.practices-title')}, practices)}>{t('Projects.button')}</button>
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
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">{t('Projects.projects-title')}</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        {t('Projects.projects-desc')}
                                    </p>
                                    <button className="button" onClick={() => openWindow({t('Projects.projects-title')}, myProjects)}>{t('Projects.button')}</button>
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
                                    <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">{t('Projects.team-title')}</span>&nbsp; &frasl; &gt;</h4>
                                    <p className="fw-200">
                                        {t('Projects.team-desc')}
                                    </p>
                                    <button className="button" onClick={() => openWindow({t('Projects.team-title')}, teamProjects)}>{t('Projects.button')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Projects