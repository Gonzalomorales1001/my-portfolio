import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import cena from '../assets/img/cena.jpg';

const Me = () => {
    const { dark } = useContext(DarkModeContext);
    return (
        <section id="me" className='vh-100 d-flex'>
            <div className="row">
                <div className="col container d-flex justify-content-center align-items-center">
                    <div className="text-center text-md-start">
                        <h1 className='fw-200 presentation__h1 lh-1'>¡Hola, Me llamo <span className='fw-800'>Gonzalo Morales!</span></h1>
                        <p className="fw-200 text-secondary fs-4">O simplemente Goncho...</p>
                        <p className="text-aqua fs-2">Desarrollador WEB Full-Stack</p>
                    </div>
                </div>
                <div className="col">
                    <div className="w-100 vh-100">
                        <img src={cena} alt="me" className='w-100 h-100 me-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Me