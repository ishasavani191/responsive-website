import './App.css'
import { Container, Row, Col } from "react-bootstrap"
function Whatpeople(){
    return(
        <>
        <div className='bgtube'>
        <div className='spacer'>
          <Container>
            <Row>
              <Col lg={12} className=''>
                <div className=' spacer2 gallery justify-content-center align-content-center d-flex'>
                  <h2>WHAT PEOPLE SAY</h2>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='col-xs-12 col-sm-6 col-lg-4'>
                <div className='men'>
                  <div className='men_img'>
                    <img src={require('./image/u1.jpg')}></img>
                  </div>
                  <p>I had a fantastic experience at this hostel; I was very impressed with the receptionists and housekeeping staff. Laureen was especially helpful during checking out after a busy week.</p>
                  <h5>JANE WOOD</h5>

                </div>
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <div className='men'>
                  <div className='men_img'>
                    <img src={require('./image/u2.jpg')}></img>
                  </div>
                  <p>The staff was wonderful! We had a very fun time in the city. I can't say enough nice things about the staff. They were all very pleasant and accommodating. We look forward to coming back here again.</p>
                  <h5>JANE WOOD</h5>

                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} className='col-md-align-item-center' >
                <div className='men'>
                  <div className='men_img'>
                    <img src={require('./image/u1.jpg')}></img>
                  </div>
                  <p>I had a fantastic experience at this hostel; I was very impressed with the receptionists and housekeeping staff. Laureen was especially helpful during checking out after a busy week.</p>
                  <h5>JANE WOOD</h5>

                </div>
              </Col>

            </Row>
          </Container>
          </div>
          </div>
        </>
    )

}
export default Whatpeople