import './App.css'
import { Container, Row, Col } from "react-bootstrap"


function Aboprogress(){
    return(
        <>
        <div className='spacer'>
        <Container>
          <Row>
            <Col  xs={12} lg={6}>
              <img src={require('./image/about1.jpg')} className='w-100'></img>
            </Col>
            <Col  xs={12} lg={6} md={12}>
              <div className='line_text'>
                <h1>WHY CHOOSE US</h1>
                <div className='d-flex skils'>
                  <p className='yellows'>EXPREIENCE</p>
                  <p>SKILLS</p>
                  <p>MISSION</p>
                </div>
            
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

                </li>
                <div className='PROFESSIONALISM'>
                  <p>PROFESSIONALISM</p>
                  <div class="progress progres">
                    <div class="progress-bar w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                </div>
                <p>COMMITMENT</p>
                <div class="progress">
                  <div class="progress-bar w-75" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" ></div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>


      </div>
        </>
    )
}
export default Aboprogress