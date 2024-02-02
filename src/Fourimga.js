import './App.css'
import { Container, Row, Col } from "react-bootstrap"


function Fourimga(){
    return(
        <>
        <Container>
        <Row>
          <Col lg={12} className=''>
            <div className='gallery justify-content-center align-content-center d-flex'>
              <h2>OUR ROOMS</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='spacer'></div>
      <Container fluid>
        <Row>
          <Col className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='our_rom'>
              <div className='room_imgss'>
                <img src={require('./image/11.jpg')} style={{ width: "290px", height: "250px" }} className='w-100'></img>

              </div>
              <div className='rom_texts'>
                <h3>DOUBBLE ROOM(PRAVATE)</h3>
                <a>$30.00</a><span>/NIGHT</span>
              </div>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='our_rom'>
              <div className='room_imgss'>
                <img src={require('./image/5.jpg')} style={{ width: "290px", height: "250px" }} className='w-100'></img>

              </div>
              <div className='rom_texts'>
                <h3>DOUBBLE ROOM(PRAVATE)</h3>
                <a>$30.00</a><span>/NIGHT</span>
              </div>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='our_rom'>
              <div className='room_imgss'>
                <img src={require('./image/12.jpg')} style={{ width: "290px", height: "250px" }} className='w-100'></img>

              </div>
              <div className='rom_texts'>
                <h3>DOUBBLE ROOM(PRAVATE)</h3>
                <a>$30.00</a><span>/NIGHT</span>
              </div>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='our_rom'>
              <div className='room_imgss'>
                <img src={require('./image/13.jpg')} style={{ width: "290px", height: "250px" }} className='w-100'></img>

              </div>
              <div className='rom_texts'>
                <h3>DOUBBLE ROOM(PRAVATE)</h3>
                <a>$30.00</a><span>/NIGHT</span>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
        </>
    )
}
export default Fourimga