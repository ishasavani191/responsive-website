import './App.css'
import { Container, Row, Col } from "react-bootstrap"
function Galleryimg()
{
    return(
        <>
        <Container>
        <Row>
          <Col lg={12}>
            <div className='gallery justify-content-center align-content-center d-flex'>
              <h2>OUR GALLERY</h2>
            </div>
          </Col>
          <Col className='d-none d-sm-block'>
            <div className='si justify-content-center align-content-center d-flex'>
              <a>ALL</a><span>|</span>
              <a>BEDROOM</a><span>|</span>
              <a>LIVING ROOM</a><span>|</span>
              <a>DINING ROOM</a><span>|</span>


            </div>

          </Col>
        </Row>

      </Container>
      <Container>

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src={require('./image/5.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water" />

            <img src={require('./image/6.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape" />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={require('./image/7.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />


          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img src={require('./image/9.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img src={require('./image/10.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>

        </div>

      </Container>

        </>
    )
}
export default Galleryimg