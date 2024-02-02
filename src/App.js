
import './App.css';
import Header from './header';
import { Container,Row,Col } from "react-bootstrap"

import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Rooms from './Rooms';
import Blog from './Blog';



function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="home" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
     <Route path='/room' element={<Rooms/>}/>
     <Route path='/blog' element={<Blog/>}/>

  

        
      </Routes>
    </div>
    </>
    
  );
}

export default App;
