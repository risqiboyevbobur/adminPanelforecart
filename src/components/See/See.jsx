import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// const See = () => {
//   const [rows, setRows] = useState();
//   console.log(rows);
//   const getAllData = (id) => {
//     let url = `http://localhost:3000/data${id}`;
//     axios.get(url).then((data) => setRows(data?.data));
//   };

//   const deleteData = (id) => {
//     axios
//       .te(`http://localhost:3000/data/${id}`)
//       .then((res) => setRows(rows.filter((el) => el.id !== id)));
//   };

//   useEffect(() => {
//     getAllData();
//   }, []);

//   return (
//     <>
//       <Container>
//         <Row className="justify-content-center mt-5 mb-5">
//           {rows?.map((item) => {
//             return (
//               <Col xc={3}>
//                 <Card
//                   className="card mb-5"
//                   style={{ width: "380px", height: "450px" }}
//                 >
//                   <Card.Img className="card-img" variant="top" src={item.img} />
//                   <Card.Body>
//                     <i className="fas fa-heart num"></i>
//                     <div style={{ display: "flex" }} className="big">
//                       <Card.Title>Apple BYZ S852I</Card.Title>
//                       <Card.Title
//                         style={{ marginLeft: "105px", color: "#FFA542" }}
//                       >
//                         {item.price}
//                         <br />
//                         <p
//                           style={{
//                             fontSize: "13px",
//                             textDecorationLine: "line-through",
//                             textAlign: "center",
//                           }}
//                         >
//                           {item.sale}
//                         </p>
//                       </Card.Title>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "start",
//                         gap: "15px",
//                       }}
//                       className="stars"
//                     >
//                       <i
//                         style={{ color: "yellow" }}
//                         className="fas fa-star start"
//                       ></i>
//                       <p style={{ color: "gray" }}>{item.reyting}</p>
//                       <Button className="to">Add to cart</Button>
//                       <Button
//                         onClick={(id) => deleteData(item.id)}
//                         className="to"
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default See;

const See = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("https://dbjsoninserver-production.up.railway.app/data").then((res) => {
      console.log(res);
      setData(res.data);
    });
  };
  const setToLOcalStorge = (id, title, img, price, reyting, sale) => {
    localStorage.setItem("id", id);
    localStorage.setItem("img", img);
    localStorage.setItem("sale", sale);
    localStorage.setItem("price", price);
    localStorage.setItem("reyting", reyting);
    localStorage.setItem("title", title);
  };
  const deleteData = (id) => {
    axios.delete(`https://dbjsoninserver-production.up.railway.app/data/${id}`).then(() => {
      getData();
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    
      <Container>
      <div className="d-flex justify-content-around mt-5">
              <h3>Create your item</h3>
              <Link to="/create">
              <Button variant="secondary">Create data</Button>
              </Link>
            </div>
        <Row className="justify-content-center mt-5 mb-5">
          {data?.map((item) => {
            return (
              <Col xc={3}>
                <Card
                  className="card mb-5"
                  style={{ width: "380px", height: "450px" }}
                >
                  <Card.Img className="card-img mt-5" style={{width:"290px",height:"200px",margin:"auto"}} variant="top" src={item.img} />
                  <Card.Body>
                    <i className="fas fa-heart num"></i>
                    <div style={{ display: "flex" }} className="big">
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Title
                        style={{ marginLeft: "105px", color: "#FFA542" }}
                      >
                        {item.price}
                        <br />
                        <p
                          style={{
                            fontSize: "13px",
                            textDecorationLine: "line-through",
                            textAlign: "center",
                          }}
                        >
                          {item.sale}
                        </p>
                      </Card.Title>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "15px",
                      }}
                      className="stars"
                    >
                      <i
                        style={{ color: "yellow" }}
                        className="fas fa-star start"
                      ></i>
                      <p style={{ color: "gray" }}>{item.reyting}</p>
                      <Button className="to">Add to cart</Button>
                      <Link to="/update">
                        <Button
                          className="to"
                          onClick={() =>
                            setToLOcalStorge(
                              item.id,
                              item.name,
                              item.img,
                              item.reyting,
                              item.sale,
                              item.price
                            )
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        onClick={(id) => deleteData(item.id)}
                        className="to"
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default See;
