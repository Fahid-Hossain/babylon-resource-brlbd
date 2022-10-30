import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Blog = () => {
  return (
    <div>
      <h1 className="text-secondary mt-5 pt-5 text-center fw-bold"><span className="border-bottom border-secondary">Our Blogs</span></h1>
      <Row
        xs={1}
        md={2}
        className="g-4 mt-3 container-fluid container"
        style={{ margin: "0 auto" }}
      >
        <Col>
          <Card>
            <Card.Body className="m-3" style={{ textAlign: "left" }}>
              <Card.Title className="mb-4">
                <h2 className="text-secondary fw-bold">
                  ভার্চ্যুয়াল প্লাটফর্মে অনুষ্ঠিত হল ‘ডিজিটাল ওয়ার্ল্ড ২০২০’
                  প্রদর্শনী
                </h2>
              </Card.Title>
              <Card.Text>
          <p className="text-secondary fs-6"> ভিন্ন পরিস্থিতি ও প্রেক্ষাপটে শেষ হল এবারের ডিজিটাল
                ওয়ার্ল্ড-২০২০ এর সপ্তম আসর। তিন দিনের এই প্রদর্শনী শুরু হয়েছিল ৯
                ডিসেম্বর এবং শেষ হল ১১ ডিসেম্বর। ৯ ডিসেম্বর সকালে ভিডিও
                কনফারেন্সের মাধ্যমে, ‘সোশ্যালি ডিসটেন্সড, ডিজিটালি কানেক্টেড’ এই
                প্রতিপাদ্য নিয়ে আয়োজিত ‘ডিজিটাল ওয়ার্ল্ড ২০২০’ এর সপ্তম আসরের
                উদ্বোধন করেন মাননীয় রাষ্ট্রপতি মো. আবদুল হামিদ ।</p>
              </Card.Text>

              <Button className="mt-2" variant="info" size="md">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img
              className="flex img-fluid"
              src="./images/websites.png"
              alt="card img"
              width="100%"
            />
          </Card>
        </Col>
  
        <Col>
          <Card>
            <img
              className="flex img-fluid"
              src="./images/websites-1.png"
              alt="card img"
              width="100%"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="m-4" style={{ textAlign: "left" }}>
              <Card.Title className="mb-4">
                <h2 className="text-secondary fw-bold">
                  ভার্চ্যুয়াল প্লাটফর্মে অনুষ্ঠিত হল ‘ডিজিটাল ওয়ার্ল্ড ২০২০’
                  প্রদর্শনী
                </h2>
              </Card.Title>
              <Card.Text>
              <p className="text-secondary fs-6"> ভিন্ন পরিস্থিতি ও প্রেক্ষাপটে শেষ হল এবারের ডিজিটাল
                ওয়ার্ল্ড-২০২০ এর সপ্তম আসর। তিন দিনের এই প্রদর্শনী শুরু হয়েছিল ৯
                ডিসেম্বর এবং শেষ হল ১১ ডিসেম্বর। ৯ ডিসেম্বর সকালে ভিডিও
                কনফারেন্সের মাধ্যমে, ‘সোশ্যালি ডিসটেন্সড, ডিজিটালি কানেক্টেড’ এই
                প্রতিপাদ্য নিয়ে আয়োজিত ‘ডিজিটাল ওয়ার্ল্ড ২০২০’ এর সপ্তম আসরের
                উদ্বোধন করেন মাননীয় রাষ্ট্রপতি মো. আবদুল হামিদ ।</p>
              </Card.Text>

              <Button className="mt-2" variant="info" size="md">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
