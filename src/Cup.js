import './App.css'
import { Container, Row, Col } from "react-bootstrap"
import { GiCoffeeCup, GiBathtub } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GiWashingMachine, GiLockers } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { BsFillPlugFill } from "react-icons/bs";
import {  FaWifi,  } from "react-icons/fa";


function Cup(){
    return(
        <>
         <div className='spacer'>
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>WHAT WE OFFER</h2>
              </div>
            </Col>
          </Row>
        </Container>
      
      </div>
      <Container>
        <Row>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiCoffeeCup></GiCoffeeCup></p>
              </div>
              <h3> TEA & COFFEE</h3>
              <li>You can always have some hot coffee & tea in our kitchen,
                available to all our clients.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiBathtub ></GiBathtub ></p>
              </div>
              <h3>HOT SHOWER</h3>
              <li>Visit Hostel is famous for clean and hot showers that you can have at any time of the day.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><TbAirConditioning ></TbAirConditioning ></p>
              </div>
              <h3> AIR CONDITION</h3>
              <li>All rooms at our hostel are equipped with reliable air conditioner systems.
              </li>
            </div>

          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiWashingMachine></GiWashingMachine ></p>
              </div>
              <h3> WASHING MACHINE </h3>
              <li>Need to quickly wash your clothes? Our laundry is always at your service.</li>
            </div>
          </Col>

        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><FaWifi ></FaWifi ></p>
              </div>
              <h3> FREE WI-FI USE</h3>
              <li>Our hostel is equipped with free high-speed Wi-Fi that is available 24/7 in all rooms.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><PiCookingPotFill ></PiCookingPotFill ></p>
              </div>
              <h3>KITCHAN SHOW</h3>
              <li>Our kitchen provides a wide range of daily fresh and tasty meals to our clients.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><BsFillPlugFill ></BsFillPlugFill ></p>
              </div>
              <h3> IRINING PLUGINS</h3>
              <li>Use our ironing services to quickly made your clothes look splendid after laundry.</li>
            </div>

          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiLockers ></GiLockers ></p>
              </div>
              <h3>LOOKERS  AVAILABLE</h3>
              <li>If you carry any valuable items, feel free to store them in our hostel’s lockers.</li>
            </div>
          </Col>

        </Row>
      </Container>
        </>
    )

}
export default Cup