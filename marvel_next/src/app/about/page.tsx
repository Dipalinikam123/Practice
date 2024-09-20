// src/components/AboutPage.js
import './about.css'
export default function About () {

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover the heroes behind the scenes!</p>
        </div>
      </section>
      <section className="content-section">
        <h2>Our Origin Story</h2>
        <p>
          We began with a vision to create something extraordinary, much like how
          the Avengers came together to protect the world. Our journey has been
          full of challenges and triumphs, and we are here to share our epic
          story with you.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver top-notch solutions and services, just like
          superheroes who strive to make a difference. We are dedicated to
          exceeding expectations and leaving a lasting impact on our clients and
          community.
        </p>
      </section>
    </div>
  );
};


