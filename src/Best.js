import './App.css'
import { Container, Row, Col } from "react-bootstrap"
function Best()
{
    return(
        <Container>
        <Row>
          <Col xs={12} lg={6} >
            <img style={{ width: "100%" }} src={require('./image/4.jpg')}></img>
          </Col>
          <Col xs={12} lg={6} >
            <div className='two py-5 ms-5'>
              <h2>BEST CITY HOSTEL</h2>
              <p>Our hostel was founded in 2008 to provide travelers on a budget from all over the world with affordable yet highly comfortable accommodation that they could enjoy.</p>
              <div className='d-flex home'>
                <p> Home</p>
                <p> About</p>
                <p> Blog</p>
              </div>

              <button className='btn1 ms-5'>Get in tuch</button>
              <button className='btn2 ms-5'>READ MORE ABOUT US</button>


            </div>
          </Col>

        </Row>
      </Container>
    )
}
export default Best