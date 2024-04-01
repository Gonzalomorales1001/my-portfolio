import React, { useEffect, useState } from 'react'
import '../css/Window.css';
import minimize from '../assets/svg/minimize.svg';
import maximizeFalse from '../assets/svg/maximize-false.svg';
import maximizeTrue from '../assets/svg/maximize-true.svg';
import close from '../assets/svg/close.svg'
import { useTranslation } from 'react-i18next';

const Window = ({ title, projects, closeWindow }) => {
    const [maximized, setMaximized] = useState(JSON.parse(localStorage.getItem('maximized')) || false);
    const [t, i18n] = useTranslation("global");
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMaximized(true);
        }
    }, [window.innerWidth]);

    useEffect(() => {
        localStorage.setItem('maximized', JSON.stringify(maximized));
    }, [maximized])

    const toggleWindowSize = () => {
        setMaximized(!maximized);
    }

    console.log(i18n.language)

    return (
        <div className="window-overlay">
            <article className={`window ${maximized && 'window--maximized'}`}>
                <header className="window__header">
                    <h5 className='window__header__title'><i className="fa fa-folder-open-o me-2"></i>{title}</h5>
                    <div className="window__header__buttons">
                        <button className='window__header__button' onClick={closeWindow}><i className="fa fa-window-minimize" aria-hidden="true"></i></button>
                        <button className='window__header__button d-none d-md-inline-block' onClick={toggleWindowSize}><i className="fa fa-window-maximize" aria-hidden="true"></i></button>
                        <button className='window__header__button window__header__button--close' onClick={closeWindow}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                </header>
                <main className="window__body">
                    <div className="container h-100">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                            {
                                projects ? (
                                    projects.map((project, index) => (
                                        <div className="col" key={`${project.title} - ${index + 1}`}>
                                            <article className="project">
                                                <header className="project-header">
                                                    <div id={`project-${index + 1}-carousel`} className="carousel slide" data-bs-ride="carousel" data-bs-pause="off">
                                                        <div className="carousel-inner">
                                                            {project.img.map((image, index) => (
                                                                <div className="carousel-item active" key={`${project.title} - image-${index + 1}`}>
                                                                    <img src={image} className="d-block w-100" alt={`${project.title} - image-${index + 1}`} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {
                                                            project.img.length > 1 && (
                                                                <>
                                                                    <button className="carousel-control-prev" type="button" data-bs-target={`#project-${index + 1}-carousel`} data-bs-slide="prev">
                                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                        <span className="visually-hidden">{t('Window.prev')}</span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button" data-bs-target={`#project-${index + 1}-carousel`} data-bs-slide="next">
                                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                        <span className="visually-hidden">{t('Window.next')}</span>
                                                                    </button>
                                                                </>
                                                            )
                                                        }
                                                    </div>
                                                </header>
                                                <main className="project-main">
                                                    <h4 className="text-aqua mt-4">&lt;<span className="text-light">{project.title}</span>&nbsp; &frasl; &gt;</h4>
                                                    <p>{i18n.language === "es" ? project.description_es : project.description_en}</p>
                                                </main>
                                                <footer className="project-footer">
                                                    <a href={project.deploy} target='__blank' className="button w-100">{t('Window.deploy')}</a>
                                                    {project.code
                                                        &&
                                                        <a href={project.code} target='__blank' className="button w-100">{t('Window.code')}</a>
                                                    }

                                                </footer>
                                            </article>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </main>
                <footer className="window__footer">
                    <div className="window__footer__icon">
                        <i className="fa fa-folder"></i>
                    </div>
                    <p>{projects.length} {t('Window.elements')}</p>
                </footer>
            </article>
        </div>
    )
}

export default Window