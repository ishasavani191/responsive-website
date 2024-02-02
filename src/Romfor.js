import './App.css'
import { Container, Row, Col } from "react-bootstrap"
import {  FaWifi, FaStar, } from "react-icons/fa";

function Romfor(){
    return(
        <>
         <div className="spacer2"></div>
    
  
    <Container>
      <Row>
        <Col className="border" sm={12} lg={6}>
          <div className="bed_img">
            <img src={require('./image/11.jpg')} className="w-100" ></img>
          </div>
        </Col>
        <Col className="border  " sm={12} lg={6}>
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
    <div className="spacer2"></div>

    <Container>
      <Row>
        <Col className="border " sm={12} lg={6}>
          <div className="bed_img">
            <img src={require('./image/12.jpg')} className="w-100" ></img>
          </div>
        </Col>
        <Col className="border "sm={12} lg={6}>
          <div className='bed_infor'>
            <h3>TRIPLE ROOMS</h3>
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
    <div className="spacer2"></div>

    <Container>
      <Row>
        <Col className="border  " sm={12} lg={6}>
          <div className="bed_img">
            <img src={require('./image/13.jpg')} className="w-100" ></img>
          </div>
        </Col>
        <Col className="border " sm={12} lg={6}>
          <div className='bed_infor'>
            <h3>4 - BED MIXED DORM</h3>
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
    <div className="spacer2"></div>
    <Container>
      <Row>
        <Col className="border" sm={12} lg={6}>
          <div className="bed_img">
            <img src={require('./image/11.jpg')} className="w-100" ></img>
          </div>
        </Col>
        <Col className="border  " sm={12} lg={6}>
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
    <div className="spacer2"></div>

   
        </>
    )
}
export default Romfor