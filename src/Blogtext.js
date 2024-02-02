import './App.css'
import { Container, Row, Col } from "react-bootstrap"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { FaGooglePlus } from "react-icons/fa";

function Blogtext(){
    return(
        <>
        <div className="spacer2"></div>
      <Container>
        <Row>
          <Col lg={12} className=''>
            <div className='gallery justify-content-center align-content-center d-flex'>
              <h2>NEW PEPOLE ASK</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="spacer2"></div>
      <Container>
        <Row>
          <Col>
            <OwlCarousel className='owl-theme' loop margin={20} nav items={2} dots={false}
              autoplay={1000} navs={false} >
              <div class='item vir'>
                <div className="img_div">
                  <img src={require('./image/7.jpg')}></img>
                </div>
                <div className="main_up">
                  <div className="up_text">
                    <h5>How to save a lot when traveling worldwide</h5>
                    <h6>MAY 12, 2023</h6>
                    <div className="up_icon d-flex ms-5 ">
                      <p><FaFacebook ></FaFacebook ></p>
                      <p><AiFillTwitterCircle></AiFillTwitterCircle></p>
                      <p><PiWhatsappLogoFill ></PiWhatsappLogoFill ></p>
                      <p><FaGooglePlus></FaGooglePlus></p>


                    </div>

                  </div>

                </div>


              </div>

              <div class='item vir'>
                <div className="img_div">
                  <img src={require('./image/8.jpg')}></img>
                </div>
                <div className="main_up">
                  <div className="up_text">
                    <h5>How to save a lot when traveling worldwide</h5>
                    <h6>MAY 12, 2023</h6>
                    <div className="up_icon d-flex ms-5 ">
                      <p><FaFacebook ></FaFacebook ></p>
                      <p><AiFillTwitterCircle></AiFillTwitterCircle></p>
                      <p><PiWhatsappLogoFill ></PiWhatsappLogoFill ></p>
                      <p><FaGooglePlus></FaGooglePlus></p>


                    </div>

                  </div>

                </div>

              </div>
              <div class='item vir'>
                <div className="img_div">
                  <img src={require('./image/p1.jpg')}></img>
                </div>
                <div className="main_up">
                  <div className="up_text">
                    <h5>How to save a lot when traveling worldwide</h5>
                    <h6>MAY 12, 2023</h6>
                    <div className="up_icon d-flex ms-5 ">
                      <p><FaFacebook ></FaFacebook ></p>
                      <p><AiFillTwitterCircle></AiFillTwitterCircle></p>
                      <p><PiWhatsappLogoFill ></PiWhatsappLogoFill ></p>
                      <p><FaGooglePlus></FaGooglePlus></p>


                    </div>

                  </div>

                </div>

              </div>
              <div class='item vir'>
                <div className="img_div">
                  <img src={require('./image/p2.jpg')}></img>
                </div>
                <div className="main_up">
                  <div className="up_text">
                    <h5>How to save a lot when traveling worldwide</h5>
                    <h6>MAY 12, 2023</h6>
                    <div className="up_icon d-flex ms-5 ">
                      <p><FaFacebook ></FaFacebook ></p>
                      <p><AiFillTwitterCircle></AiFillTwitterCircle></p>
                      <p><PiWhatsappLogoFill ></PiWhatsappLogoFill ></p>
                      <p><FaGooglePlus></FaGooglePlus></p>


                    </div>

                  </div>

                </div>

              </div>
              <div class='item vir'>
                <div className="img_div">
                  <img src={require('./image/p1.jpg')}></img>
                </div>
                <div className="main_up">
                  <div className="up_text">
                    <h5>How to save a lot when traveling worldwide</h5>
                    <h6>MAY 12, 2023</h6>
                    <div className="up_icon d-flex ms-5 ">
                      <p><FaFacebook ></FaFacebook ></p>
                      <p><AiFillTwitterCircle></AiFillTwitterCircle></p>
                      <p><PiWhatsappLogoFill ></PiWhatsappLogoFill ></p>
                      <p><FaGooglePlus></FaGooglePlus></p>


                    </div>

                  </div>

                </div>

              </div>


            </OwlCarousel>
          </Col>
        </Row>
      </Container>
        </>
    )
}
export default Blogtext