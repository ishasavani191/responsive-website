
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GoDotFill } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";







function Footer() {
    return (
        <div>
            <div className='footer_c '>

                <Container>
                    <Row>
                        <Col className=" fit_po" xs={12} md={6} lg={4}>
                            <div className='fot fote'>
                                <h2>CONTACT US</h2>
                                <p><FaPhone></FaPhone> <span>+323 913 4688</span></p>
                                <p><MdOutlineEmail></MdOutlineEmail> <span>info@ demoilnk.com</span></p>
                                <p><FaLocationArrow ></FaLocationArrow > <span>4730 Crystal Springs Dr, Los Angeles, 90027</span></p>
                            </div>
                        </Col>
                        <Col className="" xs={12} md={6} lg={4}>
                            <div className='fot'>
                                <div className='post_info'>
                                    <h2>POPULAR NEWS</h2>
                                    <a>Hostel or Hotel: What to Choosethat cold and Why</a>
                                    <li>MAY 04,2023</li>
                                    <a>our gaide for travelers on a badget</a>
                                    <li>MAY 04,2023</li>
                                </div>
                            </div>
                        </Col>
                        <Col className="" xs={12} md={6} lg={4}>
                            <div className='fot'>
                                <h2 className='mso'>QUICK LINKS</h2>
                                <div className='two_sec d-flex'>
                                    <div className='p-1'>
                                        <p><a><GoDotFill></GoDotFill></a>about us</p>
                                        <p><a><GoDotFill></GoDotFill></a>our rooms</p>
                                        <p><a><GoDotFill></GoDotFill></a>our team</p>
                                    </div>
                                    <div className='p-2'>
                                        <p><a><GoDotFill></GoDotFill></a>blog</p>
                                        <p><a><GoDotFill></GoDotFill></a>gallery</p>
                                    </div>

                                </div>
                                <div className=''>
                                    <button className='btn4'>MORE INFO</button>
                                    



                                </div>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

        </div>
    )

}
export default Footer
