import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Header from './header'
import './App.css'
import Footer from './Footer'
import {  FaWifi, FaStar, } from "react-icons/fa";
import Romfor from './Romfor'
import Romslider from './Romslider'



function Rooms() {
  return (
    <>
    <Header/>
    <Romslider/>
    <Romfor/>

    
    <Footer/>
    </>
  )
}

export default Rooms
