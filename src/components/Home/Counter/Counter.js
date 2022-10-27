import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [countup, setCountUp] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCountUp(true)}
        onExit={() => setCountUp(false)}
      >
        <Row xs={1} md={2} lg={4} className="g-2 mt-5 container-fluid">
          <Col>
            <Card style={{minWidth:"300px"}}>
              <Card.Body className="m-5" style={{ textAlign: "center" }}>
                <Card.Title className="mb-4">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={75} delay={0}></CountUp>}
                  +
                </h1>
                </Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-none">
              <Card.Body className="m-5" >
                <Card.Title className="mb-4" style={{minWidth:"300px"}}>
                <h1 className="display-2 fw-bold text-secondary">
                  {countup && <CountUp start={0} end={500} delay={0}></CountUp>}
                  +
                </h1>
                </Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="m-5" style={{ textAlign: "center" }}>
                <Card.Title className="mb-4"  style={{minWidth:"300px"}}>
                <h1 className="display-2 fw-bold text-secondary">
                  {countup && <CountUp start={0} end={34} delay={0}></CountUp>}
                  +
                </h1>
                </Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="m-5" style={{ textAlign: "center" }}>
                <Card.Title className="mb-4"  style={{minWidth:"300px"}}>
                <h1 className="display-2 fw-bold text-secondary">
                  {countup && <CountUp start={0} end={100} delay={0}></CountUp>}
                  +
                </h1>
                </Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
