import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Frank from './Frank.jpeg'
import { LinkContainer } from 'react-router-bootstrap';


function About() {
    return (
        <Container style={{marginBottom: '50px', marginTop: '50px'}}>
            <h1 style={{textAlign:'center', fontWeight:'700'}}> Meet the Team </h1>
            <Row xs={1} md={4} className="g-4" style={{justifyContent:'center'}}>
                    <Col>
                    <LinkContainer to="/Frank" style={{cursor:'pointer'}}>
                    <Card>
                        <Card.Img variant="top" src={Frank} />
                        <Card.Body>
                        <Card.Title style={{fontWeight: '600'}}>Francesca Eskina</Card.Title>
                        <Card.Text>
                            Product Manager
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </LinkContainer>
                    </Col>
            </Row>   
            
            
        </Container>
    );
};

export default About