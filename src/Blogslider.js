import { Container,Row,Col } from "react-bootstrap"
import './App.css'


function Blogslider(){
    return(
        <>
        <div >
        <Container fluid>
            <Row>
                <Col>
                <div className="blogslider">
                    <div className="blog_text ">
                        <h1>GRID BLOG - 2</h1>
                        <p>home |  Rooms</p>

                    </div>

                </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default Blogslider