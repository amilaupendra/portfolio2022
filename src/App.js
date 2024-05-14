import "./App.css";
import "./Components/navbar/Topnav";
import Timeline from "./Pages/experience/Timeline";
import Topnav from "./Components/navbar/Topnav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Works from "./Pages/works/Works";
import { ContactUs } from "./Pages/contact/ContactUs";

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Topnav />
        <Home />
        <About />
        <Timeline />
        <Works />
        <ContactUs /> 
      </Router>
    </div>
  );
}

export default App;
