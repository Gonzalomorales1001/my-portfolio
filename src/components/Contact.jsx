import React, { useContext } from 'react';
import '../css/Contact.css';
import { DarkModeContext } from '../App';

const Contact = () => {
    const dark = useContext(DarkModeContext);
    return (
        <section id="ContactMe" className={`vh-100`}>
            <div className="container h-100 flex-center">
                <div className="row">
                    <div className="col">
                        <form action="" className="contact-form">

                        </form>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact