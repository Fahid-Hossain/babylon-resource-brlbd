import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [countup, setCountUp] = useState(false);
  return (
    <div className="mx-4">
      <ScrollTrigger
        onEnter={() => setCountUp(true)}
        onExit={() => setCountUp(false)}
      >
        <Row xs={1} md={2} lg={4} className="g-3 mt-5 container-fluid container" style={{margin:"0 auto"}}>
          <Col className="text-center">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={75} delay={0}></CountUp>}
                  +
                </h1>
          </Col>
          <Col className="text-center">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={450} delay={0}></CountUp>}
                  +
                </h1>
          </Col>
          <Col className="text-center">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={34} delay={0}></CountUp>}
                  + 
                </h1> 
          </Col>
          <Col className="text-center">
                <h1 className="display-2 fw-bold text-secondary" >
                  {countup && <CountUp start={0} end={100} delay={0}></CountUp>}
                  +
                </h1>
      
          </Col>

          
        </Row>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
