import { FaMap, FaRegStar, FaHome } from "react-icons/fa";
import './App.css'
import { Container, Row, Col } from "react-bootstrap"

function Map(){
    return(
        <>
        <div className='spacer'>
      <Container>
          <Row>
            <Col xs={12} sm={6} lg={4} className="">
              <div className='info'>
                <p><FaMap></FaMap></p>
                <li>MAP & DIRACTION</li>
                <div className='hr'></div>
                <ul>Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</ul>


              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} className=''>
              <div className='info'>
                <p><FaHome ></FaHome ></p>
                <li>MAP & DIRACTION</li>
                <div className='hr'></div>
                <ul>Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</ul>


              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} className=''>
              <div className='info'>
                <p><FaRegStar></FaRegStar></p>
                <li>MAP & DIRACTION</li>
                <div className='hr'></div>
                <ul>Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</ul>


              </div>
            </Col>

          </Row>
        </Container>
      </div>
        </>
    )

}
export default Map