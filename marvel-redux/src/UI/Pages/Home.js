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
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-slide="next" data-bs-ride="carousel" >
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
              <div className="carousel-caption d-none d-md-block position-absolute text-start" style={{top:"35%"}}>
                <div className="bg-transparent text-light px-4 py-1 border-div">{item?.btn}</div>
                <p className="text-uppercase fs-2" style={{textWeight:"900"}}>{item.text}</p>
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
