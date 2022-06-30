import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div id="home" className="homediv container">
      <div className="namediv"><h1 id="nameid">Amila Upendra</h1></div>
      <div className="test container">
      <div className="textanimation wrapper container">
        <div className="static-txt">I'm a</div>
        <ul className="dynamic-txts">
          <li>
            <span>WebDeveloper</span>
          </li>
          <li>
            <span>GameDeveloper</span>
          </li>
          <li>
            <span>Cricketer</span>
          </li>
          <li>
            <span>Gamer</span>
          </li>
          <li>
            <span>Student</span>
          </li>
        </ul>
      </div>

      </div>

      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>


      </div>
      
    </div>
  );
}
