import React from 'react';
import './About.css'; // Import the CSS file

export default function About() {
    return (
        <div className="about-me-container container-md my-5">
            <h1 className="text-center mb-4">About Me</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center mb-4">
                    <div className="box1">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <p>
                        Hi, I’m Jone Lee, a passionate React JS Developer with a knack for creating dynamic and responsive web applications. I have a strong background in web development and a keen eye for design. I love solving problems and continually learning new technologies to stay ahead in this fast-paced industry.
                    </p>
                    <p>
                        My journey started with HTML and CSS, which led me to explore JavaScript and eventually dive into React. I’ve worked on various projects, from small websites to complex applications, and I’m always excited to take on new challenges.
                    </p>
                </div>
            </div>
        </div>
    );
}
