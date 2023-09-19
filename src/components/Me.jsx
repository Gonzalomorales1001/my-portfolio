import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import '../css/Presentation.css'
import { useTranslation } from 'react-i18next';

const Me = () => {
    const { dark } = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <section id="Me">
            <div className={`vh-100 presentation-wallpaper ${dark ? 'presentation-dark-wallpaper' : 'presentation-light-wallpaper'}`}>
                <div className="overlay">
                    <div className="presentation">
                        <div className={`presentation__text ${dark && 'text-light'}`}>
                            <div className="container d-flex justify-content-center align-items-center h-100">
                                <div className="row">
                                    <div className="col pt-3 pt-lg-0">
                                        <h3 className="text-secondary">{t('Me.hi')}</h3>
                                        <h1 className="presentation__title">{t('Me.i')} <span className="text-aqua bungee-outline">Gonzalo Morales</span></h1>
                                        <h4 className={`presentation__subtitle ${dark && 'presentation__subtitle--dark'}`}>{t("Me.profession")}</h4>
                                        {/* <div className="mt-3">
                                            <h2 className="text-aqua text-uppercase">&lt;<span className="text-light">Quién Soy</span>&nbsp; &frasl; &gt;</h2>
                                            <p className="presentation__p">Apasionado por</p>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <a href='#AboutMe' className="button d-block w-100 mt-5">{t("Me.button")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Me