import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-4 border-bottom">
            <div className="container ps-md-4">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <NavLink to='/' className="nav-link active">Home</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink to='/about' className="nav-link active">About Me</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink to='/education' className="nav-link active">Education</NavLink>

                        </li>
                        <li className="nav-item mx-4">
                            <NavLink to='/project' className="nav-link active">Project</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink to='/contact' className="nav-link active">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
