import React from 'react';
import './project.css';

export default function Project() {
    return (
        <div className="project-me-container container my-5">
            <div className="row row-cols-2 justify-content-center pt-5">
                <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                    <a href="https://resplendent-marshmallow-352387.netlify.app" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                        To-Do List
                        <hr className='w-100' />
                        <p>React js</p>
                    </a>
                </div>
                <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                    <a href="https://marvels-comic.netlify.app" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                        Marvel Comic
                        <hr className='w-100' />
                        <p>React js</p>
                    </a>
                </div>
                <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                    <a href="https://charming-pixie-72a636.netlify.app" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                        Story Review
                        <hr className='w-100' />
                        <p>React js</p>
                    </a>
                </div>
                <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                    <a href="https://inspiring-sfogliatella-320cea.netlify.app" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                        Calculator
                        <hr className='w-100' />
                        <p>React js</p>
                    </a>
                </div>
                <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                    <a href="https://comforting-horse-7ca4f1.netlify.app" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                        Tic Tac-Toe
                        <hr className='w-100' />
                        <p>React js</p>
                    </a>
                </div>
                <div className="col-8 col-md-4 col-lg-3 mb-5 me-md-5 project-box">
                    <a href="https://userposts-app.netlify.app" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                        Social Media
                        <hr className='w-100' />
                        <p>React js</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
