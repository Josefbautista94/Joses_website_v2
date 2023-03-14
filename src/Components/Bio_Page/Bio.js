import React, { Component } from "react";
import "./Bio.css";
import Pdf from "../Other_Items/JoseBautista_Resume.pdf";

window.addEventListener("scroll", function () {
  var bottomBar = document.querySelector(".bottomOfPage");
  var distanceFromTop = document.documentElement.scrollTop;

  if (distanceFromTop > 100) {
    // Change the number 100 to adjust when the bar should appear
    bottomBar.classList.add("show");
  } else {
    bottomBar.classList.remove("show");
  }
});
class Bio extends Component {
  render() {
    return (
      <div>
        <body className="Bio-content">
          <div>
            <h2 className="bioTitle">Small Biography About Me</h2>
            <div className="paragraphContainer" id="section1">
              <p className="bioParagraph">
                Greetings everyone! I am Jose Francisco Bautista, a Computer
                Science graduate from Lehman College, located in the vibrant
                streets of Washington Heights, New York City. As a budding
                software engineer, I am constantly seeking new and exciting
                opportunities to enhance my programming skills and create
                innovative web applications. I am an individual who thrives on
                challenges and is always looking to push my limits and grow as a
                developer, allowing me to provide maximum value to any team that
                I work with. When I am not immersed in code, I enjoy exploring
                new travel destinations, keeping myself fit and healthy with a
                good workout at the gym or a refreshing jog around the city. I
                am also a food enthusiast and enjoy indulging in a hearty meal,
                but balance it out with my love for hiking in upstate New York
                and other extracurricular activities. During my downtime, I
                enjoy delving into philosophy books and taking on challenging
                coding problems to keep my mind sharp. I am passionate about
                making a positive impact in the tech industry and beyond, and I
                am always open to new experiences and collaborations with
                like-minded individuals who share the same goal. If you are
                looking for a dedicated and driven software engineer who is
                committed to success, I am the perfect candidate for your team.
                Let's work together to create innovative solutions and make a
                difference in the world!
              </p>
            </div>
          </div>
          <div className="bottomOfPage">
            <a className="resumeButton" href={Pdf}>
              Take a look at my resume
            </a>
          </div>
        </body>
      </div>
    );
  }
}

export default Bio;
