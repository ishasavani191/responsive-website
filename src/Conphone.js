import './App.css'
import { Container, Row, Col } from "react-bootstrap"
import { FaMobileAlt } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { IoChatbubbleEllipses } from "react-icons/io5";



function Conphone(){
    return(
        <div className='spacer'>
        <Container>
            <Row>
                <Col xs={12} md={6} lg={4}>
                <div className='contact_3icon'>
                    <div className='phone'>
                        <p><FaMobileAlt></FaMobileAlt></p>
                    </div>
                    <div className='number'>
                    <a>+1 323-913-4688</a>
                    </div>
                    <div className='number'>
                    <a>+1 323-888-4554</a>
                    </div>


                </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <div className='contact_3icon'>
                    <div className='phone'>
                        <p><RiHome2Line></RiHome2Line></p>
                    </div>
                    <div className='number'>
                    <a>4730 Crystal Springs Dr,</a>
                    </div>
                    <div className='number'>
                    <a> Los Angeles, CA 90027</a>
                    </div>
                    

                </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <div className='contact_3icon'>
                    <div className='phone'>
                        <p><IoChatbubbleEllipses></IoChatbubbleEllipses></p>
                    </div>
                    <div className='number'>
                    <a>mail@demolink.org</a>
                    </div>
                    <div className='number'>
                    <a>info@demolink.org</a>
                    </div>


                </div>
                </Col>

            </Row>
        </Container>

    </div>
    

    )
}
export default Conphone