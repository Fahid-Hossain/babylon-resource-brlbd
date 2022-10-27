import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [countup, setCountUp] = useState(false);
  return (
    <div className="container">
      <ScrollTrigger
        onEnter={() => setCountUp(true)}
        onExit={() => setCountUp(false)}
      >
        <Row xs={1} md={2} lg={4} className="g-2 mt-5 container-fluid">
          <Col>
            <Card style={{minWidth:"15.625rem"}}>
              <Card.Body className="m-5">
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
            <Card style={{minWidth:"15.625rem"}}>
              <Card.Body className="m-5">
                <Card.Title className="mb-4">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={450} delay={0}></CountUp>}
                  +
                </h1>
                </Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{minWidth:"15.625rem"}}>
              <Card.Body className="m-5">
                <Card.Title className="mb-4">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={34} delay={0}></CountUp>}
                  +
                </h1>
                </Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{minWidth:"15.625rem"}}>
              <Card.Body className="m-5">
                <Card.Title className="mb-4">
                <h1 className="display-2 fw-bold text-secondary" >
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