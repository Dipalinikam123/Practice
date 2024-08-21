import React from 'react';
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import './Home.css'

const obj = [
  {
    img: img1,
    text: " The Roxxon Age of Marvel Comics Begins!",
    btn:"IMMORTAL THOR",
  },
  {
    img: img2,
    text: "Storm & Magneto's Friendship",
    btn:"RESURRECTION OF MAGNETO",
  },
  {
    img: img3,
    text: "Meet Anti-Venom, Venom Polar Opposite",
    btn:"CHARACTER CLOSE-UP",

  },
];

export default function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="next" >
        <div className="carousel-indicators">
          {obj.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {obj.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}` }
            >
              <img src={item.img} className="d-block  w-100" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block position-absolute top-50 text-start">
                <div className="bg-transparent text-light px-4 py-1 mb-4 w-25 border-white">{item?.btn}</div>
                <h2 className="text-uppercase text-bold">{item.text}</h2>
               <button className="bg-danger px-3 py-2 text-light border-0 mt-2 button-skew">READ MORE!</button>
              </div> 
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
