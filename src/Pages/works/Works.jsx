import React from "react";
import "./works.css";
import ReactCardSlider from "../../Components/cardslider/ReactCardSlider";

export default function Works() {
  return (
    <div id="works" className=" worksdiv">
      <div id='topicdiv'><span>My Workings</span></div>
      <ReactCardSlider />
    </div>
  );
}
