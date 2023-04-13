import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navs() {
  return (
    <>
      <div className="big">
        <Navbar expand="lg" variant="light" bg="dark">
          <Container>
            <Link style={{textDecoration:"none"}} to="/create">
              <Navbar.Brand style={{color:"white", textDecoration:"none"}} href="#">Create</Navbar.Brand>
            </Link>
            <Link style={{ textDecoration:"none"}} to="/see">
              <Navbar.Brand style={{color:"white", textDecoration:"none"}} href="#">See</Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navs;
