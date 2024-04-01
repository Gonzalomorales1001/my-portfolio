import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/AboutMe.css';
import gonzalo from '../assets/img/gonzalo.webp';
import certification from '../assets/gonzalomorales-certification.png';
import HTML from '../assets/stack/html.svg'
import CSS from '../assets/stack/css.svg'
import Bootstrap from '../assets/stack/bootstrap.svg'
import JavaScript from '../assets/stack/javascript.svg'
import ReactJS from '../assets/stack/react.svg'
import Node from '../assets/stack/nodejs.svg'
import Express from '../assets/stack/express-white.svg'
import GIT from '../assets/stack/git.svg'

import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import bootstrap from '../assets/tech/bootstrap.svg'
import javascript from '../assets/tech/javascript.svg'
import react from '../assets/tech/react.svg'
import node from '../assets/tech/node.svg'
import express from '../assets/tech/express.svg'
import git from '../assets/tech/git.svg'
import github from '../assets/tech/github.svg'
import mongodb from '../assets/tech/mongodb.svg'
import mysql from '../assets/tech/mysql.svg'
import next from '../assets/tech/next.svg'
import prisma from '../assets/tech/prisma.svg'
import shadcn from '../assets/tech/shadcn.svg'
import pnpm from '../assets/tech/pnpm.svg'
import tailwind from '../assets/tech/tailwind.svg'
import typescript from '../assets/tech/typescript.svg'
import vscode from '../assets/tech/vscode.svg'
import trpc from '../assets/tech/trpc.svg'

const AboutMe = () => {
    const [t] = useTranslation("global");
    return (
        <section className="section flex-center text-light" id='AboutMe'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 flex-center">
                        <div className="aqua-border">
                            <div className="me-img-container">
                                <img src={gonzalo} alt="Gonzalo Morales" />
                                <div className="me-img-container__shadow">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 text-center text-md-start">
                        <div>
                            <h2 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">{t("AboutMe.title")}</span>&nbsp; &frasl; &gt;</h2>
                            <p className="about-me__p">{t("AboutMe.t1")} <a className="text-aqua text-decoration-none" href="https://rollingcodeschool.com/" target="__blank">Rolling Code School.</a> {t("AboutMe.t2")}</p>
                            <p className="about-me__p">{t("AboutMe.t3")}</p>
                        </div>
                        <a href={certification} target='__blank' className='text-aqua'>{t("AboutMe.button")}</a>
                        <div className='d-none d-md-block'>
                            <h4 className="text-aqua text-uppercase mt-4">&lt;<span className="text-light">Stack</span>&nbsp; &frasl; &gt;</h4>
                            <div className="container">
                                <div className="row row-cols-6">
                                    <div className="col">
                                        <img src={html} alt="HTML" />
                                    </div>
                                    <div className="col">
                                        <img src={css} alt="CSS" />
                                    </div>
                                    <div className="col">
                                        <img src={bootstrap} alt="Bootstrap" />
                                    </div>
                                    <div className="col">
                                        <img src={javascript} alt="JavaScript" />
                                    </div>
                                    <div className="col">
                                        <img src={react} alt="React" />
                                    </div>
                                    <div className="col">
                                        <img src={node} alt="Node.js" />
                                    </div>
                                    <div className="col">
                                        <img src={express} alt="Express.js" />
                                    </div>
                                    <div className="col">
                                        <img src={git} alt="Git" />
                                    </div>
                                    <div className="col">
                                        <img src={github} alt="GitHub" />
                                    </div>
                                    <div className="col">
                                        <img src={mongodb} alt="MongoDB" />
                                    </div>
                                    <div className="col">
                                        <img src={mysql} alt="MySQL" />
                                    </div>
                                    <div className="col">
                                        <img src={next} alt="Next.js" />
                                    </div>
                                    <div className="col">
                                        <img src={prisma} alt="Prisma ORM" />
                                    </div>
                                    <div className="col">
                                        <img src={shadcn} alt="shadcn/ui" />
                                    </div>
                                    <div className="col">
                                        <img src={pnpm} alt="PNPM" />
                                    </div>
                                    <div className="col">
                                        <img src={tailwind} alt="Tailwind CSS" />
                                    </div>
                                    <div className="col">
                                        <img src={typescript} alt="TypeScript" />
                                    </div>
                                    <div className="col">
                                        <img src={vscode} alt="Visual Studio Code" />
                                    </div>
                                    <div className="col">
                                        <img src={trpc} alt="tRPC" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="stack fw-light d-flex">
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={HTML} alt="HTML5" className="tools html" />
                                    <span className="d-block my-2">HTML</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={CSS} alt="CSS" className="tools css" />
                                    <span className="d-block my-2">CSS</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={Bootstrap} alt="Bootstrap" className="tools bootstrap" />
                                    <span className="d-block my-2">Bootstrap</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={JavaScript} alt="JavaScript" className="tools javascript" />
                                    <span className="d-block my-2">JavaScript</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={ReactJS} alt="ReactJS" className="tools react" />
                                    <span className="d-block my-2">ReactJS</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={Node} alt="NodeJS" className="tools node" />
                                    <span className="d-block my-2">NodeJS</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={Express} alt="Express" className="tools express" />
                                    <span className="d-block my-2">Express</span>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center tools-container">
                                    <img src={GIT} alt="GIT" className="tools git" />
                                    <span className="d-block my-2">GIT</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe