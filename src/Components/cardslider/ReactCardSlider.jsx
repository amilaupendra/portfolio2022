import React from "react";
import "./reactcardslider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import htmlimg  from '../../images/html.png';
import cssimg from '../../images/css.png';

const ReactCardSlider = (props) => {
  const slides = [
    {image: htmlimg,title:'Portfolio',description:'Html+css+js+boostrap'},
    {image:cssimg,title:'Quiz app',description:'This is a descrition'},
    {image:'https://picsum.photos/400/300',title:'Portfolio',description:'Html+css+js+boostrap'},
    {image:'https://picsum.photos/600/320',title:'This is fourth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/200/300',title:'This is sisxth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is sev title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is eight title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is nine title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is ten title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'},
    {image:'https://picsum.photos/300/300',title:'This is fifth title',description:'This is a descrition'}

  ];

  const slideLeft =()=> {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1210;
  };

  const slideRight =()=> {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1210;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index}>
              <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description"> {slide.description}</p>
            </div>
          );
        })}
      </div>

      <MdChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

export default ReactCardSlider;
