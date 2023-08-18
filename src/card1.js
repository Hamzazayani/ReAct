import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Cardd1() {
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2021/12/6664e-16401168917757-1920.jpg?w=840" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div>
    )
  }
  
  export default Cardd1