import './App.css'
import { Container, Row, Col } from "react-bootstrap"

function Email(){
    return(
        <div className='spacer'>
        <Container>
            <Row>
                <Col>
                <div className='mail'>
                    <input type='text' placeholder='enter name'></input>
                </div>
                </Col>
                <Col>
                <div className='mail'>
                    <input type='text' placeholder='enter email'></input>
                </div>
                </Col>
                <Col>
                <div className='mail'>
                    <input type='text' placeholder='phone'></input>
                </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                <div className='mail'>
                    <input type='address' placeholder='adress'></input>
                </div>
                </Col>
                <Col>
                <div className='mail'>
                    <input type='number' placeholder='enter your Age'></input>
                </div>
                </Col>
                <Col>
                <div className='mail'>
                    <input type='date' placeholder='enter booking date'></input>
                </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col className='col-12'>
                
        
                <div className='address'>
                    <button className='btn3'>send  massage</button>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Email