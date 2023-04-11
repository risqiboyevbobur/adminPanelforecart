import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Link to="/navbar">
            <Navbar.Brand href="#">Home</Navbar.Brand>
          </Link>
          <Link to="/create">
            <Navbar.Brand href="#">Create</Navbar.Brand>
          </Link>
         <Link to="/see">
         <Navbar.Brand href="#">See</Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navs;
