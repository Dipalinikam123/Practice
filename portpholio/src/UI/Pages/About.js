import React, { useState } from 'react';
import './About.css'; // Import the CSS file

export default function About() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('about');
    const skill = ["C", "C++", "HTML/HTML5", "CSS/CSS3","BOOTSTRAP","TAILWIND", "JAVASCRPIT/ES6", "JQUERY", "REACT JS", "TYPESCRIPT"]

    return (
        <div className="about-me-container container-md my-5 ">
            <div className="row align-items-center justify-content-center ps-0 pe-0 g-0 gap-2 ">
                <div className="col-5 col-md-4 pt-1  about-box">
                    <p
                        className={`fs-4 text-center  py-2 ${activeTab === 'about' ? 'text-danger' : 'text-black'}`}
                        onClick={() => setActiveTab('about')}
                        style={{ cursor: 'pointer' }}
                    >
                        About Me
                    </p>
                </div>
                <div className="col-6 col-md-4 pt-1 about-box ">
                    <p
                        className={`fs-4 text-center py-2 ${activeTab === 'skill' ? 'text-danger' : 'text-black'}`}
                        onClick={() => setActiveTab('skill')}
                        style={{ cursor: 'pointer' }}
                    >
                        Skill
                    </p>
                </div>
            </div>
            <div class="row pt-5 justify-content-center mt-md-5">
                <div className="col-12 col-md-8 about-text">
                    {activeTab === 'about' && (
                        <>
                            <p className="skill-card  shadow-sm rounded mb-3  p-3 ">
                                "Hi! I'm John Lee, a passionate web developer specializing in creating modern, responsive websites. With a background in Bachelor of Computer Applications, I love solving complex problems through clean, efficient code and bringing ideas to life online."
                            </p>
                            <p className='skill-card shadow-sm rounded mb-3 p-3'>
                                "After completing my BCA, I started my journey as a developer, working on projects ranging from simple static websites to complex web applications. Over the years, I've developed expertise in technologies like React, JavaScript, and Bootstrap, focusing on creating user-friendly and responsive designs."
                            </p>
                            <p className=' skill-card shadow-sm rounded p-3'>
                                "I'm always open to new opportunities and collaborations. If you'd like to work together, feel free to reach out through the Contact page!"
                            </p>
                        </>
                    )}
                </div>
                <div class="col-12 mb-4 text-center">
                    <div class="row gap-2 justify-content-center">
                    {activeTab === 'skill' && (
                        skill.map((e, i) => {
                            return <div class="col-8 col-md-4  skill-card p-4 shadow-sm rounded skill-box">
                                <i class="fab fa-react fa-3x mb-3 "></i>
                                <h5>{e}</h5>
                            </div>
                        })
                    )}
                      </div>
                </div>
            </div>
        </div>
    );
}
