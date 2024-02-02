import './App.css'
import Awards from './Awards'
import Best from './Best'

import Blogslider from "./Blogslider"

import Carosul from "./Carosul"
import Footer from './Footer'
import Header from "./header"

function Blog(){
    return(
        <div>
        <Header/>
        <Blogslider/>
        
        {/* <div className="spacer2"></div> */}
        <Carosul/>
        <Best/>
        <Footer/>
        

        </div>

    )
}
export default Blog