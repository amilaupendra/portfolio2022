import "./App.css";
import "./Components/navbar/Topnav";
import Topnav from "./Components/navbar/Topnav";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Works from "./Pages/works/Works";

function App() {
  return (
    
      <div className="App">
        
        <Router>
        <Topnav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/works" element={<Works />}></Route>
        </Routes>
        </Router>
      </div>
    
  );
}

export default App;
