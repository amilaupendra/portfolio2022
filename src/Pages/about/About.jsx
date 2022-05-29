import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="container aboutdiv">
      <div className="mydetails">
        <div className="myimagediv col-lg-6  col-md-12 col-12">
          <img className="myimage " src="./images/myphoto.jpeg" alt="myimage" />
        </div>

        <div className="detailsdiv col-12 col-md-12 col-lg-6">
          <div className="abouttextdiv">About Me</div>
          <div className="introdiv">Software developer</div>
          <br />
          <h6>I like working with new Tools and Technologies.</h6>
          <div>
            <ul className="detailsul">
              <li className="detailsli">
                {" "}
                <span className="topic">Name:</span>{" "}
                <span className="description">Amila Upendra</span>
              </li>
              <li className="detailsli">
                {" "}
                <span className="topic">Degree:</span>{" "}
                <span className="description">Bsc(Hons) Computation & Management</span>
              </li>
              <li className="detailsli">
                {" "}
                <span className="topic">Email:</span>{" "}
                <span className="description">Amila Upendra</span>
              </li>
              <li className="detailsli">
                {" "}
                <span className="topic">Phone:</span>{" "}
                <span className="description">0762386482</span>
              </li>
              <li className="detailsli">
                {" "}
                <span className="topic">Country:</span>{" "}
                <span className="description">Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
