import React from 'react';
import Typical from 'react-typical';
import img from '../../assets/girl.png';
import './Home.css';
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { Typewriter } from 'react-simple-typewriter';


export default function Home() {
    return (
        <div className="fluid-container  container-xl w-100 ">
            <div className="row pt-lg-5 pb-4 g-0 ">
                <div className="col-12 col-lg-6 text-center text-md-start mb-4 mt-4 mb-md-0">
                    <div className="img-box">
                        <img src={img} alt="Jone Lee" className="img-fluid rounded" />
                    </div>
                </div>
                <div className="col-12 col-lg-6 text-center text-md-center  text-lg-center text-xl-start fw-bold pt-md-5">
                    <div className="row g-0">
                        <p className="mb-4 col-12">
                            Hi, I’m <span className="text-danger name-t">Jone Lee</span><br />
                            <span>
                                <Typewriter
                                    words={['React Js Developer!', 'Web Developer!']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </p>

                        <div className="col-12 col-lg-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores autem velit corporis officiis, sed in. Reiciendis, aliquam soluta quibusdam totam ab voluptatem ipsum consequuntur! Vel reprehenderit saepe enim doloremque!
                        </div>

                    </div>
                    <div className="row icon-box gap-4 align-items-md-center justify-content-center justify-content-xl-start  align-items-end  align-items-xl-end g-0">
                        <div className="col-3 box1">
                            <a href='https://www.linkedin.com/in/dipali-nikam-9987a42b3'><FiLinkedin size={22} className='bg-transparent' /></a>
                        </div>
                        <div className="col-3 box1 ">
                            <a href='https://github.com/Dipalinikam123'><FaGithub size={22} className='bg-transparent' /></a>

                        </div>
                        <div className="col-3 box1">
                            <a href='dipalinikam0108@gmail.com'><FiMail size={22} className='bg-transparent' /></a>
                        </div>
                        {/* <div className="col-3 box1">
                            ds
                        </div> */}
                        {/* <div className="col-6 pt-5">
                            hgfhfhgtyh
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    );
}
