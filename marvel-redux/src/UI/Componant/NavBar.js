import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='w-100 bg-dark '>
            <hr className="m-0 p-0 text-light"/>
            <nav>
                <ul  className='list-unstyled d-md-flex justify-content-center m-0 py-2 gap-5 d-none d-md-block'>
                    <li>
                        <NavLink className='text-decoration-none text-white ' to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-decoration-none text-white ' to={"/comic"}>Comic</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-decoration-none text-white ' to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-decoration-none text-white ' to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>

            </nav>

        </div>
    )
}
