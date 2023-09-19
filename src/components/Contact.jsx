import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, useFormState } from 'react-hook-form'
import '../css/Contact.css';
import { DarkModeContext } from '../App';
import Swal from 'sweetalert2';

const Contact = () => {
    const dark = useContext(DarkModeContext);

    const form = useRef();

    const [customSubmitData, setCustomSubmitData] = useState();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const customSubmit = (data) => {
        emailjs.sendForm('service_p410nit', 'template_dppbbe4', form.current, 'jHajK50j4t_M8kFoi')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado con éxito',
                    background: "#13131ABF",
                    iconColor: "#46ffd5",
                    color: "#0fb4a4",
                    confirmButtonColor: '#0fb4a4',
                })
            }, (error) => {
                console.log(error.text);
            });
    }

    const emailRegExp = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    return (
        <section id="ContactMe">
            <div className={`section flex-center ${dark && 'text-light'}`}>
                <div className={`container`}>
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
                                <form ref={form} onSubmit={handleSubmit(customSubmit)} className='contact-form'>
                                    <p className="fw-light">No dudes en dejarme un mensaje...</p>
                                    <div className='mb-2'>
                                        <label htmlFor="name" className='fw-light'>Nombre:</label>
                                        <input type="text" name="user_name" {...register('user_name', { required: true, minLength: 3, maxLength: 30 })} minLength={3} maxLength={30} className='d-block w-100' id="user_name" />
                                        {errors.user_name && (<small className='text-danger'>El nombre debe tener entre 3 a 30 caracteres</small>)}
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="email" className='fw-light'>Correo:</label>
                                        <input type="text" name="user_email" {...register('user_email', { required: true, minLength: 3, maxLength: 30, pattern: emailRegExp })} minLength={3} maxLength={30} className='d-block w-100' id="user_email" />
                                        {errors.user_email && (<small className='text-danger'>Email inválido</small>)}
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="msg" className='fw-light'>Mensaje:</label>
                                        <textarea name="message" {...register('message', { required: true, maxLength: 250 })} maxLength={250} id="message" className='d-block w-100'></textarea>
                                        {errors.message && (<small className='text-danger'>El mensaje debe tener entre 1 a 250 caracteres</small>)}
                                    </div>
                                    <div>
                                        <button className="button w-100 mt-2" type="submit">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact