import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Phone from './phone_in_hand.jpg'
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import Colleagues from './colleagues.jpg';
import HandShake from './handshake.jpg';
import Designer from './designer.jpg';

function Home() {

    return(
        <div style={{background:'#F9F9F9'}}>
        <Container>
            <Row>
                <Col xs={12} sm={6}> <Image src={Phone} fluid="true" rounded="true" /> </Col>
                <Col xs={12} sm={6} className="d-flex align-items-center">
                    <div>
                    <h1 style={{fontWeight:'900'}}> Life is difficult. We can simplify it. </h1>
                    <h4 style={{fontWeight:'400'}}> Cure your indecision and say goodbye to the headaches of choosing
                        the wrong career path. At Ottimi, we condense years of life-coaching 
                        expertise into a dynamic, personalized portal. 
                    </h4>
                    <div className='text-center' style={{margin: '30px'}}>
                    <Button size="lg" style={{fontWeight:600}} onClick={{}}> Get Started </Button>
                    </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>

<Container>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Colleagues}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Do you know your ideal workspace? </h3>
          <p>Let us help you, find you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HandShake}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>More interviews means more opportuniy</h3>
          <p>Learn how we can help you help others.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Designer}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Curiosity</h3>
          <p>
            The engine of thought.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>
        </div>
    )
}

export default Home