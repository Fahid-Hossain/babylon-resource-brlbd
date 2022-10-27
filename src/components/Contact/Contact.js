import React from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBContainer,
} from "cdbreact";
import { Button, Card, Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="m-5">
      
      <Row xs={1} md={2} className="g-4 mt-5 container-fluid container" style={{margin:"0 auto"}}>
   
   <Col>
   <CDBContainer>
        <CDBCard style={{ width: "30rem" }}>
          <CDBCardBody className="m-4 ">
            <div className="text-center mt-4 mb-4">
              <p className="h4"> Write to Us </p>
            </div>
            <label htmlFor="defaultContactName" className="text-muted m-0">
              Your name
            </label>
            <CDBInput id="defaultContactName" className="mt-n3" type="text" />
            <label htmlFor="defaultContactEmail" className="text-muted m-0">
              Your email
            </label>
            <CDBInput id="defaultContactEmail" className="mt-n3" type="email" />
            <label htmlFor="defaultContactSubject" className="text-muted m-0">
              Subject
            </label>
            <CDBInput
              id="defaultContactSubject"
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultContactMessage" className="text-muted m-0">
              Your message
            </label>
            <CDBInput
              id="defaultContactMessage"
              className="mt-n3"
              type="textarea"
            />
            <CDBBtn
              outline
              color="secondary"
              style={{ width: "40%" }}
              className="btn-block mt-3 mx-auto"
            >
              Send
              <CDBIcon far icon="paper-plane" />
            </CDBBtn>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
   </Col>
   <Col>
     <Card>
     <img className="flex img-fluid"
       src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=1800&t=st=1666860828~exp=1666861428~hmac=b8afa4912eeb602a01891e7278407e99129fa62c40b88dd0108fc020b4c86e05"
       alt="card img"
       width="100%"
     />
     </Card>
   </Col>
</Row>
    </div>
  );
};

export default Contact;
