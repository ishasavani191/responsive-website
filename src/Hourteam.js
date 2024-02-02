import './App.css'
import { Container, Row, Col } from "react-bootstrap"

function Hourteam()
{
    return(
        <>
        <div className='spacer'>

<Container>
  <Col lg={12}>
    <div className='gallery justify-content-center align-content-center d-flex'>
      <h2>OUR TEAM</h2>
    </div>
  </Col>
</Container>

</div>
<Container>
<Row>
  <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
    <div className='single'>
      <div className='single_img'>
        <img src={require('./image/t-1.jpg')}></img>
      </div>
      <p> SAME ROBINSOR</p>
      <li>FOUNDER</li>
      <ul>+1 323-913-4688</ul>


    </div>
  </Col>
  <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
    <div className='single'>
      <div className='single_img'>
        <img src={require('./image/t3.jpg')}></img>
      </div>
      <p> SAME ROBINSOR</p>
      <li>FOUNDER</li>
      <ul>+1 323-913-4688</ul>
    </div>
  </Col>
  <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
    <div className='single'>
      <div className='single_img'>
        <img src={require('./image/t4.jpg')}></img>
      </div>
      <p> SAME ROBINSOR</p>
      <li>FOUNDER</li>
      <ul>+1 323-913-4688</ul>
    </div>
  </Col>
  <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
    <div className='single'>
      <div className='single_img'>
        <img src={require('./image/t5.jpg')}></img>
      </div>
      <p> SAME ROBINSOR</p>
      <li>FOUNDER</li>
      <ul>+1 323-913-4688</ul>
    </div>
  </Col>

</Row>
</Container>
        </>
    )

}
export default Hourteam