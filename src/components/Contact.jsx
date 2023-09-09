import React from 'react'

const Contact = () => {
    return (
        <section id="ContactMe" className={`vh-100`}>
            <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-aqua fw-700">&lt;<span className="text-light">Contacto</span>&nbsp; &frasl; &gt;</h2>
                <div className='row row-cols-1 row-cols-md-2 w-100'>
                    <div className="col">
                        <form action="" className='contact-form bg-black-transparency'>
                            <p className="fw-300">No dudes en dejarme un mensaje...</p>
                            <div className='mb-2'>
                                <label htmlFor="name" className='fw-200'>Nombre:</label>
                                <input type="text" name="name" className='d-block w-100' id="name" />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="email" className='fw-200'>Correo:</label>
                                <input type="text" name="email" className='d-block w-100' id="email" />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="msg" className='fw-200'>Mensaje:</label>
                                <textarea name="msg" id="msg" className='d-block w-100'></textarea>
                            </div>
                            <div>
                                <button className="g-button dark-gradient w-100 mt-2" type="button">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <article className="social">

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact