import './App.css'
import { Container, Row, Col } from "react-bootstrap"

function Awards(){
    return(
        <>
        <div className='spacer'>
      <div className='speed'>
        <Container>
          <Row>
            <Col  xs={12} sm={6} md={4} lg={3}>
            <div className='hapy_GUESTE'>
            <h1>650</h1>
            <p>HAPPY GUESTE</p>
            </div>
            </Col>
            <Col  xs={12} sm={6} md={4} lg={3}>
            <div className='hapy_GUESTE'>
            <h1>348</h1>
            <p>RECOMMENDATIONS</p>
            </div>
            </Col>
            <Col  xs={12} sm={6} md={4} lg={3}>
            <div className='hapy_GUESTE'>
            <h1>10k</h1>
            <p>CUPS OF COFFEE</p>
            </div>
            </Col>
            <Col  xs={12} sm={6} md={4} lg={3}>
            <div className='hapy_GUESTE'>
            <h1>100</h1>
            <p>AWARDS</p>
            </div></Col>

          </Row>
        </Container>

      </div>
     </div>
        </>
    )
}
export default Awards