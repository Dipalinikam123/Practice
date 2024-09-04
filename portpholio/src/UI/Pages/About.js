import React, { useState } from 'react';
// import './About.css'; // Import the CSS file

export default function About() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="about-me-container container-md my-5 ">
            <h1 className="text-center mb-4">About Me</h1>

            <div className="row row align-items-center ps-0 pe-0 g-0">
                <div className="col col-md-6 py-2">
                    <p
                        className={`fs-4 about-box py-2 ${activeTab === 'about' ? 'text-danger' : 'text-black'}`}
                        onClick={() => setActiveTab('about')}
                        style={{ cursor: 'pointer' }}
                    >
                        About Me
                    </p>
                </div>
                <div className="col-12 col-md-6 py-2">
                    <p
                        className={`fs-4 about-box py-2 ${activeTab === 'skill' ? 'text-danger' : 'text-black'}`}
                        onClick={() => setActiveTab('skill')}
                        style={{ cursor: 'pointer' }}
                    >
                        Skill
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    {activeTab === 'about' && (
                        <p className="animate__animated animate__bounceInLeft about-box about-box2 p-3">
                            Your content for the About Me section 1
                        </p>
                    )}
                </div>
                <div class="col-12 col-md-6">
                    {activeTab === 'skill' && (
                        <p className="animate__animated animate__bounceInRight about-box about-box2 p-3">
                            Your content for the Skill section 2
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
