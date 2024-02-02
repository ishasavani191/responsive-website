import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Header from './header'
import './App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './Footer';
import Aboutimg from './Aboutimg';
import Aboprogress from './Aboprogress';
import Fourimga from './Fourimga';
import Galleryslider from './Galleryslider';
import Awards from './Awards';



function About() {
  return (
    <div>
    
      <Header />
     <Aboutimg/>
      <Aboprogress/>
      <Fourimga/>
      <Galleryslider/>
      
     
      <Awards/>
      <Footer />
      





    </div>
  )
}

export default About
