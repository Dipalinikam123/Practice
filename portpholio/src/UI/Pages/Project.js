import React from 'react';
import './project.css';

export default function Project() {
    const projects = [
        {
            name: "To-Do List",
            link: "https://resplendent-marshmallow-352387.netlify.app"
        },
        {
            name: "Marvel Comic",
            link: "https://marvels-comic.netlify.app"
        },
        {
            name: "Story Review",
            link: "https://charming-pixie-72a636.netlify.app"
        },
        {
            name: "Calculator",
            link: "https://inspiring-sfogliatella-320cea.netlify.app"
        },
        {
            name: "Tic Tac-Toe",
            link: "https://comforting-horse-7ca4f1.netlify.app"
        },
        {
            name: "Social Media",
            link: "https://userposts-app.netlify.app"
        }
    ]
    return (
        <div className="project-me-container container my-5">
            <div className="row row-cols-2 justify-content-center pt-5">
                {
                    projects.map((e, i) => {
                        return (
                            <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                                <a href={e?.link} target="_blank" rel="noopener noreferrer" className='text-decoration-none '>
                                    {e?.name}
                                    <hr className='w-100' />
                                    <p>React js</p>
                                </a>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}
