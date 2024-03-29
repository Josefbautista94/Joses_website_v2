import React from "react";
import "./Project.css";

function Project() {


  
  return (
    <div className="project-page">
      <h1 className="project-title">My Projects</h1>
      <div>
      <div className="carousel">
        {/* If I want to add more projects just add under here so the most recent one can be at the front */}
        <div className="carousel-item">
  <a href="https://heroversus.vercel.app/">
    <iframe 
      src="https://heroversus.vercel.app/" 
      title="Hero Versus Project" 
      width="800" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Hero Versus</div>
  </a>
</div>

<div className="carousel-item">
  <a href="https://weather-zeta-two.vercel.app/">
    <iframe 
      src="https://weather-zeta-two.vercel.app/" 
      title="Weather Project" 
      width="800" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Weather</div>
  </a>
</div>
<div className="carousel-item">
  <a href="https://coolchatapp-7488f.web.app/">
    <iframe 
      src="https://coolchatapp-7488f.web.app/" 
      title="Cool Chat App" 
      width="800" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Cool Chat App</div>
  </a>
</div>

<div className="carousel-item">
  <a href="https://airexp.herokuapp.com/">
    <iframe 
      src="https://airexp.herokuapp.com/" 
      title="Air Express Project" 
      width="800" 
      height="300" 
      frameBorder="0">
    </iframe>
    <div className="project-label">Air Express</div>
  </a>
</div>
<div className="carousel-item">
  <a href="https://colab.research.google.com/drive/1w2ZAhjqFsEExxdMLcQpB_aMjoYEpWPCa?usp=sharing">
  <img
                    className="carousel-image"
                    src={require("../Images/IMG_9483.jpg")}
                    alt="Air Express App"
                  />
    <div className="project-label">Google Colab Shared Project</div>
  </a>
</div>
      </div>
      <button className="previous" onClick={() => scrollCarousel('prev')}>Previous</button>
<button className="next" onClick={() => scrollCarousel('next')}>Next</button>

      </div>
    </div>
  );
}

export default Project;

function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  if (direction === 'next') {
    carousel.scrollLeft += itemWidth;
  } else {
    carousel.scrollLeft -= itemWidth;
  }
}

