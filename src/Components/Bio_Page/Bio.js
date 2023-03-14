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
                Hey, I'm Jose Bautista from the vibrant streets of Washington
                Heights in New York City. As a Computer Science major from
                Lehman College and a budding software engineer, I'm on the hunt
                for an awesome software engineer job where I can level up my
                programming skills and create some cool web apps. I'm always
                looking for new challenges to push my limits and grow as a
                developer, so I can bring the most value to my team. When I'm
                not coding, I'm usually exploring new travel destinations,
                pumping iron at the gym, or taking a refreshing jog around the
                city. I'm a foodie and can't resist a hearty meal, but I balance
                it out with my love for hiking in upstate New York and
                skateboarding with my buddies. In my downtime, you can catch me
                buried in a good philosophy book or taking on coding challenges
                to keep my mind sharp. I'm always open to new experiences and
                eager to collaborate with like-minded people to make a positive
                impact in the tech industry.
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
