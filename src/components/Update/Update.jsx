import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [img, setImg] = useState("");
  console.log(location,title, price, img, sale);
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setImg(localStorage.getItem("img"));
    setLocation(localStorage.getItem("location"));
    setSale(localStorage.getItem("sale"));
    setPrice(localStorage.getItem("price"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault()
    axios
      .put(
        `https://dbjsoninserver-production.up.railway.app/data/${id}`,

        {
          title: title,
          price: price,
          sale: sale,
          location:location,
          img: img,
        }
      )
      .then(() => {
        navigate("/see");
      });
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {/* {name.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : ( */}
                <p style={{ color: "green" }}>Success</p>
                {/* )} */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Sale</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {/* {price.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : ( */}
                <p style={{ color: "green" }}>Success</p>
                {/* // )} */}
              </Form.Group>
              <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {/* {price.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : ( */}
                <p style={{ color: "green" }}>Success</p>
                {/* // )} */}
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sale"
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                />
                {/* {sale.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : ( */}
                <p style={{ color: "green" }}>Success</p>
                {/* // )} */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
                {/* {img.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : ( */}
                <p style={{ color: "green" }}>Success</p>
                {/* )} */}
              </Form.Group>

              {/* {name.length < 1 ? (
                <Button style={{ width: "100%" }} variant="danger">
                  You can't submit
                </Button>
              ) : ( */}
              <Button
                onClick={handleUpdate}
                style={{ width: "100%" }}
                variant="primary"
              >
                Update
              </Button>
              <Link to="/see">
              <Button style={{ width: "100%" }} variant="danger">Back</Button>
               

              </Link>
              {/* )} */}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Update;
