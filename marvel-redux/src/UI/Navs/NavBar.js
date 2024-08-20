import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='w-100 bg-dark '>
            <nav>
                <ul  className='list-unstyled d-flex justify-content-center gap-2'>
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
