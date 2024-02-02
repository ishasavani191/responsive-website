import Carousel from 'react-bootstrap/Carousel';


function Slider(){
    return(
        <>
        
      <Carousel>
        <Carousel.Item>
          <img src={require('./image/1.jpg')} className='img'></img>
          <Carousel.Caption>
            <p>Serving travelers on a budget</p>
            <h3>We provide comfortable</h3>
            <h3>accommodation for you</h3>
            <button className='btn'> Book Now</button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./image/2.jpg')} className='img'></img>

          <Carousel.Caption>
            <p>Serving travelers on a budget</p>
            <h3>We provide comfortable</h3>
            <h3>accommodation for you</h3>
            <button className='btn'> Book Now</button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./image/3.jpg')} className='img'></img>

          <Carousel.Caption>
            <p>Serving travelers on a budge</p>
            <h3>We provide comfortable</h3>

            <h3>accommodation for you</h3>
            <button className='btn'> Book Now</button>


          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )

}
export default Slider