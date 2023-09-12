import React, { useContext } from 'react';
import '../css/Contact.css';
import { DarkModeContext } from '../App';

const Contact = () => {
    const dark = useContext(DarkModeContext);
    return (
        <section id="ContactMe" className={`vh-100`}>
            <div className={`container flex-center h-100 ${dark && 'text-light'}`}>
                <div className="row row-cols-1 row-cols-md-2 w-100">
                    <div className="col">
                        <h2 className="text-aqua text-center mt-4">&lt;<span className="text-light">Contacto</span>&nbsp; &frasl; &gt;</h2>
                        <p className="fw-light"><i className="fa fa-envelope-o text-aqua me-2" aria-hidden="true"></i>gonzalomorales1001@gmail.com</p>
                        <p className="fw-light"><i className="fa fa-map-marker text-aqua me-2" aria-hidden="true"></i>Tucumán - Argentina</p>
                        <h5 className="text-aqua text-center mt-4 d-none d-md-block">&lt;<span className="text-light">Más Información</span>&nbsp; &frasl; &gt;</h5>
                        <a href="https://www.linkedin.com/in/gonzalomorales-web" className="d-block button w-100 mt-2"><i className="fa fa-linkedin-square me-3" aria-hidden="true"></i>LinkedIn</a>
                        <a href="https://github.com/Gonzalomorales1001" className="d-block button w-100 mt-2"><i className="fa fa-github me-3" aria-hidden="true"></i>GitHub</a>
                    </div>
                    <div className="col">
                        <div className="aqua-border">
                            <form action="" className='contact-form'>
                                <p className="fw-light">No dudes en dejarme un mensaje...</p>
                                <div className='mb-2'>
                                    <label htmlFor="name" className='fw-light'>Nombre:</label>
                                    <input type="text" name="name" className='d-block w-100' id="name" />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="email" className='fw-light'>Correo:</label>
                                    <input type="text" name="email" className='d-block w-100' id="email" />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="msg" className='fw-light'>Mensaje:</label>
                                    <textarea name="msg" id="msg" className='d-block w-100'></textarea>
                                </div>
                                <div>
                                    <button className="button w-100 mt-2" type="button">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact