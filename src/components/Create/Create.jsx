import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import createDate from "..//DynamicCard";

export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [sale, setSale] = useState();
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  console.log(title,location, price, img, sale);

  const createAllData = async (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      price: price,
      sale: sale,
      img: img,
    };

    let url = "https://dbjsoninserver-production.up.railway.app/data";
    await createDate(url, obj)
      .then((res) => {
        if (res.status === 201) {
          alert("Successfully created");
          setTitle("");
          setPrice("");
          setSale("");
          setImg("");
          setLocation("");
        }
      })
      .then(() => {
        navigate("/see");
      });
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={7}>
            <div className="d-flex justify-content-between mt-2">
              <h3>Create page</h3>
              <Link to="/see">
                <Button variant="success">Show data</Button>
              </Link>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Sale</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sale"
                  onChange={(e) => setSale(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image"
                  onChange={(e) => setImg(e.target.value)}
                />
              </Form.Group>

              <Button
                onClick={createAllData}
                style={{ width: "100%" }}
                variant="primary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
