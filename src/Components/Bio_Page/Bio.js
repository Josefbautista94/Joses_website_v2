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
            <img
                    className= "jose_hike"
                    src={require("../Images/JoseHike.jpg")}
                    alt="A Picture of me at a hike at Sams Point NY"
                  />

            <div className="paragraphContainer" id="section1">
    <p className="bioParagraph">
        Hello everyone! My name is Jose Francisco Bautista. I'm a proud Mexican American from New York City, born in Harlem and raised in Washington Heights. As a Computer Science graduate from Lehman College, I'm always on the lookout for opportunities to hone my programming skills and craft innovative web applications.
    </p>
    <p className="bioParagraph">
        My passion for technology began in childhood, and I've been enamored with it ever since. I thrive on challenges, constantly pushing my boundaries to grow as a developer. Outside the realm of code, I'm deeply intrigued by the intricacies of the human mind. I often delve into psychology and philosophy books, seeking insights into human behavior and thought processes.
    </p>
    <p className="bioParagraph">
        When I'm not engrossed in books or code, you might find me exploring new travel destinations, staying active with gym sessions or city jogs, or indulging in my love for anime and true crime documentaries. I cherish the thrill of tackling challenging coding problems and relish opportunities to connect with new people.
    </p>
    <p className="bioParagraph">
        Driven by a desire to make a positive mark in the tech world and beyond, I'm always eager to collaborate with individuals who share this vision.
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
