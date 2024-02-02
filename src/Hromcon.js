import './App.css'
import { Container, Row, Col } from "react-bootstrap"
import {  FaWifi, FaStar, } from "react-icons/fa";

function Hromcon(){
    return(
        <>
        <div className="spacer2"></div>
      <div className='spacer'>
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>OUR ROOM</h2>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
        <Container>
          <Row>
            <Col className="border col-xs-12 col-md-6">
              <div className="bed_img">
                <img src={require('./image/11.jpg')} className="w-100" ></img>
              </div>
            </Col>
            <Col className="border col-xs-12 col-md-6">
              <div className='bed_infor'>
                <h3>DOUBLE ROOM(PRIVETE)</h3>
                <div className=' d-flex star '>
                  <p><FaStar ></FaStar ></p>
                  <p><FaStar ></FaStar ></p>
                  <p><FaStar ></FaStar ></p>
                  <p><FaStar ></FaStar ></p>
                  <a>4 COUSTMER REVIEW</a>


                </div>
                <li>Double room is one of the most popular choices at Visit Hostel. It includes one double bed with comfortable mattresses and bed linen, WC, and a TV set.</li>
                <button className='btn3'>MORE INFO</button>

              </div>
            </Col>

          </Row>
        </Container>
        </>
    )
}
export default Hromcon