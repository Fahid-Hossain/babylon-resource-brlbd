import React from "react";
import "./Contact.css"

import { Col, Row } from "react-bootstrap";
import Forms from "../Forms/Forms";

const Contact = () => {
  return (
    <div>
      
      <Row xs={1} md={2} className="g-0 mt-5 container-fluid container" style={{margin:"0 auto"}}>
   
   <Col  className="mt-5">
   {/* <!--Google map--> */}
<div id="map-container-google-1" class="z-depth-1-half map-container" style={{width:"100%"}}>
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style={{border:"0"}} allowfullscreen title="map"></iframe>
</div>

{/* <!--Google Maps--> */}
   </Col>
   <Col>
     {/* <img
       src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=1800&t=st=1666860828~exp=1666861428~hmac=b8afa4912eeb602a01891e7278407e99129fa62c40b88dd0108fc020b4c86e05"
       alt="card img"
       width="100%"
     /> */}
     <Forms/>
   </Col>
</Row>
    </div>
  );
};

export default Contact;
