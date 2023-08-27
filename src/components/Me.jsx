import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import arrow from '../assets/arrow.svg';
import me from '../assets/img/me.png';

const Me = () => {
    const { dark } = useContext(DarkModeContext);
    return (
        <section className='vh-100 dark-gradient-2' id='Me'>
            <div className="h-100 text-center container flex-column d-flex justify-content-center align-items-center">
                <div className="profile">
                    <img src={me} alt="Gonzalo Morales" />
                </div>
                <div className="presentation">
                    <h1 className='fw-200 presentation__h1 lh-1'>¡Hola, Me llamo <span className='fw-800'>Gonzalo Morales!</span></h1>
                    <p className="fw-200 text-secondary fs-4">O simplemente Goncho...</p>
                    <p className="text-aqua fs-2">Desarrollador WEB Full-Stack</p>
                </div>
                <div className="stack fw-200">
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\html.svg" alt="HTML5" className="tools html" />
                        <span className="d-block my-2">HTML</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\css.svg" alt="CSS" className="tools css" />
                        <span className="d-block my-2">CSS</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\bootstrap.svg" alt="Bootstrap" className="tools bootstrap" />
                        <span className="d-block my-2">Bootstrap</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\javascript.svg" alt="JavaScript" className="tools javascript" />
                        <span className="d-block my-2">JavaScript</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\react.svg" alt="ReactJS" className="tools react" />
                        <span className="d-block my-2">ReactJS</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\mui.svg" alt="MaterialUI" className="tools mui" />
                        <span className="d-block my-2">MaterialUI</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\nodejs.svg" alt="NodeJS" className="tools node" />
                        <span className="d-block my-2">NodeJS</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\express-white.svg" alt="Express" className="tools express" />
                        <span className="d-block my-2">Express</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                        <img src="src\assets\git.svg" alt="GIT" className="tools git" />
                        <span className="d-block my-2">GIT</span>
                    </div>
                </div>
                <div className="arrow">
                    <img src={arrow} className='rotate-180' alt="flecha" />
                </div>
            </div>
            {/* <div className="container p-5">
                <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
                    <div className="col d-flex justify-content-center">
                        <div className="profile">
                            <img src={me} alt="Gonzalo Morales" />
                        </div>
                    </div>
                    <div className="col text-center">
                        <h1>¡Hola! me llamo <span className='fw-700'>Gonzalo Morales</span></h1>
                        <p className='fw-300'>Soy Desarrollador Web Full Stack</p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Me