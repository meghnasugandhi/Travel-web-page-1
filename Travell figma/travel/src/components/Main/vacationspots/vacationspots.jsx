import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import india from '../../../assets/images/india.png';
import japan from '../../../assets/images/japan.png';
import sweden from '../../../assets/images/sweden.png';
import brazil from '../../../assets/images/brazil.png';
import australia from '../../../assets/images/australia.png';


const Vacationspots = () => {
  return (
    <section style={{ background: "#fff", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-4">Desired Vacation Spots</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card
              className="text-center"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                minHeight: "180px",
                 backgroundColor:"#b0b0b0"
              }}
            >
              <div style={{ background: "#b0b0b0", height: "120px" }}></div>
              <Card.Img variant="top" src={sweden} alt="sweden" />
              <Card.Body>
                <Card.Title>Sweden</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="text-center"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                minHeight: "180px",
                 backgroundColor:"#b0b0b0"
              }}
            >
              <div style={{ background: "#b0b0b0", height: "120px" }}></div>
              <Card.Img variant="top" src={japan} alt="japan" />
              <Card.Body>
                <Card.Title>Japan</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="text-center"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                minHeight: "180px",
                backgroundColor:"#b0b0b0"
              }}
            >
              <div style={{ background: "#b0b0b0", height: "120px" }}></div>
              <Card.Body>
                 <Card.Img variant="top" src={india} alt="Flag of India" />
                <Card.Title>India</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              className="text-center"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                minHeight: "180px",
                 backgroundColor:"#b0b0b0"
              }}
            >
              <div style={{ background: "#b0b0b0", height: "120px" }}></div>
              <Card.Img variant="top" src={brazil} alt="brazil" />
              <Card.Body>
                <Card.Title>Brazil</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} >
            <Card
              className="text-center"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                minHeight: "180px",
                 backgroundColor:"transparent"
              }}
            >
              <div style={{ background: "#b0b0b0", height: "120px" }}></div>
              <Card.Img variant="top" src={australia} alt="australia" />
              <Card.Body>
                <Card.Title>Australia</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card
              className="text-center p-3"
              style={{
                borderRadius: "12px",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                background: "linear-gradient(135deg, #b0b0b0, #e6f4e6)",
              }}
            >
              <p style={{ color: "#f59e0b", fontWeight: "bold" }}>Get 10% Off</p>
              <h5 className="fw-bold">Of Our All Destination</h5>
              <Button
                variant="success"
                style={{ marginTop: "10px", borderRadius: "6px" }}
              >
                View All Destination
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vacationspots;
