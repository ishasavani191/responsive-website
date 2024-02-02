import './App.css'
import { Container, Row, Col } from "react-bootstrap"
function Romslider(){
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                <div className='roomslider'>
                    <div className='roomslider_text'>
                        <h1>ROOMS</h1>
                        <a>HOME
                            <span> /Room</span>

                        </a>

                    </div>

                </div>
                </Col>
            </Row>
        </Container>
        </>

    )
}
export default Romslider