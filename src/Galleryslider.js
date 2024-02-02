import './App.css'
import { Container, Row, Col } from "react-bootstrap"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Galleryslider(){
    return(
        <>
         <div className="spacer2"></div>
      <div className="spacer">
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className=' spacer2 gallery justify-content-center align-content-center d-flex'>
                <h2>GALLERY</h2>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <OwlCarousel className='owl-theme' autoplay={1000} loop margin={10} nav={false} items={4} dots={false}>

                <div class='item'>
                  <div>
                    <img src={require('./image/g1.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g2.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g3.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g4.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g5.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g1.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g2.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g3.jpg')}></img>
                  </div>
                </div>
                <div class='item'>
                  <div>
                    <img src={require('./image/g4.jpg')}></img>
                  </div>
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </div>
        </>
    )
}
export default Galleryslider