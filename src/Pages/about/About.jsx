import React from "react";
import "./about.css";
import myimg from "../../images/myimg.png";
import AWSImg from "../../images/aws.png";
import ReactImg from "../../images/react.png";
import JsImg from "../../images/js.png";
import CssImg from "../../images/css.png";
import JavaImg from "../../images/java.png";
import HtmlImg from "../../images/html.png";

export default function About() {
  return (
    <div id="about" className=" aboutdiv">
      <div className="logos">
        <div className="logo-slide">
          
            <img src={AWSImg} alt="aws img" />
            <img src={JsImg} alt="aws img" />
            <img src={CssImg} alt="aws img" />
            <img src={JavaImg} alt="aws img" />
            <img src={ReactImg} alt="aws img" />
            <img src={HtmlImg} alt="aws img" />
        </div>
        <div className="logo-slide">
            <img src={AWSImg} alt="aws img" />
            <img src={JsImg} alt="aws img" />
            <img src={CssImg} alt="aws img" />
            <img src={JavaImg} alt="aws img" />
            <img src={ReactImg} alt="aws img" />
            <img src={HtmlImg} alt="aws img" />
      </div>
      </div>
      <div className="mydetails">
        <div className="myimagediv col-lg-6  col-md-12 col-12">
          <img className="myimage " src={myimg} alt="myimage" />
        </div>

        <div className="detailsdiv col-12 col-md-12 col-lg-6">
          {/* <div className="abouttextdiv">About Me</div> */}
          <div className="introdiv">Software developer</div>
          <br />
          <h6>
            Dynamic and adaptable former trainee turned skilled Software
            Engineer, specializing in mobile and web development. Proficient in
            full-stack development, cloud technologies, and problem-solving.
            Experienced in coding, testing, and debugging. Collaborative team
            player with a track record of success. BSc in Computation &
            Management. Former Editor of Computation and Management Society.
            Proficient in Java, React, AWS, SQL, and more. Holds certifications
            in AWS and Design Patterns.
          </h6>
          {/* <div>
            <ul className="detailsul">
              <li className="detailsli">
                {" "}
                <span className="topic">Name:</span>{" "}
                <span className="description">Amila Upendra</span>
              </li>
              <li className="detailsli">
                {" "}
                <span className="topic">Degree:</span>{" "}
                <span className="description">Computation & Management</span>
              </li>
              <li className="detailsli">
                {" "}
                <span className="topic">Email:</span>{" "}
                <span className="description">amilaupendra5@gmail.com</span>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
