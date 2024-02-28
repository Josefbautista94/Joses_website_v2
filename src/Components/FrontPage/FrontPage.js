import React, { Component } from "react";
import "./FrontPage.css";
import Pdf from "../Other_Items/Jose_Bautista.pdf";

class FrontPage extends Component {
  state = {
    showBio: false,
    frontPageHeader: "",
  };

  headers = [
    "From Concrete Jungles to Digital Domains: Navigating New Horizons!",
    "Navigating the Digital Landscape: A Journey from Streets to Screens!",
    "Coding Through Life’s Adventures: From Cityscapes to Cyberspaces!",
    "Blending Bytes and Beats: A Symphony of Code and Creativity!",
    "From Byte Beats to Urban Streets: Harmonizing Code and Culture!",
    "Journeying Through Code: From Skyline Algorithms to Digital Dreamscapes!",
    "Embarking on Digital Expeditions: From Urban Grids to Grid Systems!",
    "Coding Symphonies: Where Urban Rhythms Meet Digital Harmonies!",
    "Navigating Code Canyons: From Urban Mazes to Algorithmic Labyrinths!",
    "Crafting Digital Skylines: Where Code and Creativity Intersect!",
    "Beyond the Concrete: Soaring in the Infinite Sky of Codes and Nodes!",
    "Urban Codes: Weaving the Streets of Technology with Threads of Innovation!",
    "Coding Narratives: Composing Tales from Silicon Alleys to Digital Valleys!",
    "In the Heart of the Code Jungle: Pioneering Paths of Innovation and Exploration!",
    // If you want to add more headers just add them here.
  ];

  // my function to get random headers
  getRandomHeader = () => {
    const randomIndex = Math.floor(Math.random() * this.headers.length);
    return this.headers[randomIndex];
  };

  bioDivRef = React.createRef();

  toggleBio = () => {
    this.setState(
      (prevState) => ({
        showBio: !prevState.showBio,
      }),
      () => {
        // Use a callback to ensure state has been updated
        if (this.state.showBio) {
          this.bioDivRef.current.scrollIntoView({ behavior: "smooth" }); // 2. Scroll to the bioDiv
        }
      }
    );
  };

  componentDidMount() {
    // Load the Twitter script to render the feed

    if (
      !document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.charSet = "utf-8";
      document.body.appendChild(script);
    }
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    // Add viewport meta tag
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    document.getElementsByTagName("head")[0].appendChild(meta);

    //Loads my page headers
    this.setState({
      frontPageHeader: this.getRandomHeader(),
    });
  }

  render() {
    return (
      <div className="pageContainer">
        <div className="container">
          <h1 className="frontPageHeader">
            {this.state.frontPageHeader} {/* Updated this line to use state */}
          </h1>

          <button className="Buttons" onClick={this.toggleBio}>
            About Me
          </button>
        </div>

        {this.state.showBio && (
          <div className="bioDiv" ref={this.bioDivRef}>
            <div>
              <img
                className="jose_hike"
                src={require("../Images/JoseHike.jpg")}
                alt="A Picture of me at a hike at Sams Point NY"
              />

              <h4 className="bioTitle">
                From NYC Streets to Digital Suites: My Tale
              </h4>

              <div className="paragraphContainer" id="section1">
                <p className="bioParagraph">
                  Thrilled you've taken a moment to delve deeper. My name is
                  Jose Francisco Bautista. I'm a proud Mexican American from New
                  York City, born in Harlem and raised in Washington Heights. As
                  a Computer Science graduate from Lehman College, I'm always on
                  the lookout for opportunities to hone my programming skills
                  and craft innovative web applications.
                </p>
                <p className="bioParagraph">
                  My passion for technology began in childhood, and I've been
                  enamored with it ever since. I thrive on challenges,
                  constantly pushing my boundaries to grow as a developer.
                  Outside the realm of code, I'm deeply intrigued by the
                  intricacies of the human mind. I often delve into psychology
                  and philosophy books, seeking insights into human behavior and
                  thought processes.
                </p>
                <p className="bioParagraph">
                  Beyond the digital world, I have a flair for mixology, holding
                  a license from the prestigious American Bartenders School.
                  This allows me to blend creativity with precision, much like
                  coding, but in the vibrant world of cocktails. It's always a
                  pleasure to craft a drink that brings a smile to someone's
                  face.
                </p>
                <p className="bioParagraph">
                  When I'm not engrossed in books, code, or experimenting with
                  new cocktail recipes, you might find me exploring new travel
                  destinations, staying active with gym sessions or city jogs,
                  or indulging in my love for anime and true crime
                  documentaries. I cherish the thrill of tackling challenging
                  coding problems and relish opportunities to connect with new
                  people.
                </p>
                <p className="bioParagraph">
                  Driven by a desire to make a positive mark in the tech world
                  and beyond, I'm always eager to collaborate with individuals
                  who share this vision.
                </p>
              </div>
            </div>
            <div className="bottomOfPage">
              <a
                className="Buttons"
                href={Pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Take A Look At My Resume
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FrontPage;
