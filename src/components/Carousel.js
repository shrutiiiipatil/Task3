//https://www.unc.edu/wp-content/uploads/2020/11/Food-1200x675.jpeg
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{objectFit:'contain !important'}}>
      
      <Carousel.Item style={{maxHeight:'600px'}}>
        <img
          className="d-block w-100"
          src="https://www.unc.edu/wp-content/uploads/2020/11/Food-1200x675.jpeg"
          style={{filter:'brightness(30%)'}}
          alt="First slide"
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success text-white bg-success">Search</Button>
          </Form>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'600px'}}>
        <img
          className="d-block w-100"
          src="https://www.unc.edu/wp-content/uploads/2020/11/Food-1200x675.jpeg"
          style={{filter:'brightness(30%)'}}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success text-white bg-success">Search</Button>
          </Form>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'600px'}}>
        <img
          className="d-block w-100"
          src="https://www.unc.edu/wp-content/uploads/2020/11/Food-1200x675.jpeg"
          style={{filter:'brightness(30%)'}}
          alt="Third slide"
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success text-white bg-success">Search</Button>
          </Form>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;