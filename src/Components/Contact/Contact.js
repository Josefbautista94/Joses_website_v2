import React, { Component } from "react";
import "./Contact.css";
// import logo from '../Images/58485698e0bb315b0f7675a8.png'

class Contact extends Component {
  render() {
    return (
      <div>
        <header className="contactPage">
          <h1>Contact Me Here At:</h1>
          <h3>Click The Mail Icon To Shoot Me An E-Mail!</h3>
          {/* <img src={logo} className="Email-pic" alt="logo" /> */}

          <a class="mailto" href="mailto:JoseF.Bautista22@gmail.com"></a>

          <h1>JoseF.Bautista22@gmail.com</h1>
        </header>
      </div>
    );
  }
}

export default Contact;
