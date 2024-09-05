import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-md py-md-4 border-bottom" style={{ backgroundColor: "#ECF0F3" }}>
            <div className="container ps-md-4">
                {/* jjfvjkn */}
                <IoIosMenu size={32} className='d-md-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" />
                <div className="offcanvas offcanvas-start d-md-none" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                    <div className="offcanvas-header" style={{ backgroundColor: "#ECF0F3" }}>
                        <h4 id="offcanvasLeftLabel">John Lee</h4>
                        <hr />
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body " style={{ backgroundColor: "#ECF0F3" }}>
                       
                        <p  className="nav-link mt-4 mb-2" onClick={()=>navigate('/')} data-bs-dismiss="offcanvas">Home</p>
                        <p  className="nav-link mb-2" onClick={()=>navigate('/about')} data-bs-dismiss="offcanvas">About Me</p>
                        <p  className="nav-link mb-2" onClick={()=>navigate('/project')} data-bs-dismiss="offcanvas">Project</p>
                        <p  className="nav-link mb-2" onClick={()=>navigate('/contact')} data-bs-dismiss="offcanvas">Contact</p>
                    </div>
                </div>
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
