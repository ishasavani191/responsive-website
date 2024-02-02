import { Container,Row,Col,Navbar,Nav, } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { WiTime3 } from "react-icons/wi";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF,FaTwitter,FaInstagram,FaGooglePlusG  } from "react-icons/fa";
import { Link } from 'react-router-dom';







function Header(){
    return(
        <div>
            
     <Container>
        <Row>
          <Col xl lg={4} className='my-2'>
            <img src={require('./image/logo.png')} ></img>
          </Col>
          <Col className='my-3 d-none m-end d-lg-block'>
            <a className=' head_txt me-4 '><WiTime3></WiTime3><span>09:00AM — 05:00PM</span></a>
            <a className='me-4'><FaPhone></FaPhone><span>+1 323-913-4688</span></a>
            <button>Book now</button>

          </Col>
        </Row>

      </Container>
      <div className='bg_gry'>
        <Container>
          <Row>
            <Col xs={6}>
              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link><Link to="/home" >Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/about">About</Link> </Nav.Link>
                      <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>
                    <Nav.Link> <Link to="/contact">Contact</Link></Nav.Link>
                     <Nav.Link> <Link to="/room">Rooms</Link>  </Nav.Link>



                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col>
              <div className='d-flex pir '>
                <p className='me-auto'></p>
                <p><FaFacebookF></FaFacebookF></p>
                <p><FaTwitter ></FaTwitter ></p>
                <p><FaInstagram ></FaInstagram></p>
                <p className="gp" ><FaGooglePlusG ></FaGooglePlusG ></p>

              </div>


            </Col>

          </Row>
        </Container>
        </div>
        </div>
    )

}
export default Header