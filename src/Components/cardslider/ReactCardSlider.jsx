import "./reactcardslider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import lms from '../../images/lms.jpg';
import shoppingCartImg from '../../images/shopping-cart.webp'
import emergentlabs from '../../images/emergentlabs.jpeg'

const ReactCardSlider = (props) => {
  const slides = [
    {image:emergentlabs,title:'Business website', description:'Next JS, tailwind css, AWS lambda, Node js', link:'https://www.emergentlabs.cloud/'},
    {image:'https://picsum.photos/400/300',title:'ToDo App',description:'Html+css+js used simple app',link:'https://amilaupendra.github.io/Todo-app/'},
    {image: lms,title:'Learning platform',description:'HTML+CSS+JAVASCRIPT Group project',link:'https://amilaupendra.github.io/2021g2r1/'},
    {image:shoppingCartImg,title:'shopping-Cart',description:'React+JS+CSS', link:'https://amilaupendra.github.io/Shopping-Cart/'},
    
  ];

  const slideLeft =()=> {
    const isMobileView = window.innerWidth <= 768;
    const scrollAmount = isMobileView ? 300 : 1210;
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - scrollAmount;
  };

  const slideRight =()=> {
    const isMobileView = window.innerWidth <= 768;
    const scrollAmount = isMobileView ? 300 : 1210;
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + scrollAmount;
     
    
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {slides.map((slide, index) => {
          return (
            <a href={slide.link} key={index}>
              <div className="slider-card">
                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description"> {slide.description}</p>
              </div>
              </a>
              );
              })}
            </div><MdChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

export default ReactCardSlider;
