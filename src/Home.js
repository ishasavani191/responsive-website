import Header from "./header"

import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import {  FaWifi, FaStar, } from "react-icons/fa";
import { GiCoffeeCup, GiBathtub } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GiWashingMachine, GiLockers } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { BsFillPlugFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { FaGooglePlus } from "react-icons/fa";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "./Footer";
import Slider from "./Slider";
import Map from "./Map";
import Best from "./Best";
import Galleryimg from "./Galleryimg";
import Hourteam from "./Hourteam";
import Cup from "./Cup";
import Hromcon from "./Hromcon";
import Whatpeople from "./Whatpeople";
import Border from "./Border";
import Carosul from "./Carosul";
import Galleryslider from "./Galleryslider";














function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Map/>
      <Best/>
      <Galleryimg/>
      <Hourteam/>
      <Cup/>
      <Hromcon/>
      <Whatpeople/>
     <Border/>
      <Carosul/>
      <Galleryslider/>
      <Footer/>

      


    </div>



  )
}
export default Home