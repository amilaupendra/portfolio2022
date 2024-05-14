import React from "react";
import "./home.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import AmilaCv from "../../../src/images/Amila cv.pdf";

export default function Home() {
  return (
    <div id="home" className="homediv container">
      <div className="namediv"><h1 id="nameid">Amila Upendra</h1></div>
      <div className="test container">
      <div className="textanimation wrapper">
        <div className="static-txt"><p>I'm a</p></div>
        <ul className="dynamic-txts">
          <li>
            <span>Web Apps Developer</span>
          </li>
          <li>
            <span>Mobile Apps Developer</span>
          </li>
          <li>
            <span>Full-Stack Developer</span>
          </li>
          <li>
            <span>BSc Graduate</span>
          </li>
          <li>
            <span>Enthusistic Developer</span>
          </li>
        </ul>
      </div>

      </div>

      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="links">
        
      <a href="https://www.linkedin.com/in/amila-upendra-953771207/" className="profiles" ><FaLinkedin /></a>
      
      <a href="https://github.com/amilaupendra" className="profiles"><FaGithub /></a>
      
      <a href={AmilaCv} download="AmilaCv" className="profiles"><FaFileDownload />Resume</a> 
      </div>
      
      
    </div>
  );
}
