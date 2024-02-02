import React from 'react'
import Header from './header'
import { Container, Row, Col } from "react-bootstrap"
import { FaMobileAlt } from "react-icons/fa";

import './App.css'
import Error from './Error';
import Conphone from './Conphone';
import Input from './Input';
import Email from './Email';
import Footer from './Footer';



function Contact(){
    return (
        <div>
            {/* <h1>This is the contact page</h1> */}
            <Header/>
            <Error/>
            <Conphone/>
            <Input/>
            <Email/>
            <Footer/>
            

            
               
            
        </div>
    )
}

export default Contact