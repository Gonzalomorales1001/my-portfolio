import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../App';

const Projects = () => {
    const { dark } = useContext(DarkModeContext);
    return (
        <section className="vh-100" id='Projects'>
            <div className="container flex-center h-100">

            </div>
        </section>
    )
}

export default Projects