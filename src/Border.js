import './App.css'
import { Container, Row, Col } from "react-bootstrap"
function Border(){
    return(
        <>
         <div className='spacer'>
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>MORE THAN 10 YEARS OF FOLLOWING THE DREAM</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className='think'>
              <h1>12</h1>
              <h2>AWARDS</h2>

            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className='think'>
              <h1>62</h1>
              <h2>AWARDS</h2>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className='think'>
              <h1>1K</h1>
              <h2>AWARDS</h2>
            </div>
          </Col>

        </Row>
      </Container>
        </>
    )
}
export default Border