import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const HomeAbout = () => {
  return (
    <>
   <Row xs={1} md={2} className="g-4 mt-5 container-fluid">
   
        <Col>
          <Card>
            <Card.Body className="m-5" style={{textAlign:"left"}}>
              <Card.Title className="mb-5">
                <h1 className="text-secondary fw-bold">About the company</h1>
                </Card.Title>
              <Card.Text>
              Babylon Resources Ltd. is a leading IT firm which develops & implements different IT solutions to make your business life easier. Since our inception, we have been maintaining a sophisticated code of service level and standard, which drives us to achieve our clients’ trust & become their reliable technology partner. We have a strong mobile games & apps development team who is always working on developing apps & games.
              </Card.Text>

            <Button className="mt-2" variant="info" size="lg">Read More</Button>
            </Card.Body>
          

          </Card>
        </Col>
        <Col>
          <Card>
          <img className="flex"
            src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=1800&t=st=1666860828~exp=1666861428~hmac=b8afa4912eeb602a01891e7278407e99129fa62c40b88dd0108fc020b4c86e05"
            alt="card img"
            width="100%"
          />
          </Card>
        </Col>
    </Row>
    </>
  );
};

export default HomeAbout;
