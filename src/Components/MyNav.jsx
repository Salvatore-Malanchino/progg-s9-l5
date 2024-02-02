import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaRegUser } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';

const MyNav = () => (
  <Navbar expand="lg" className="bg-dark">
    <Container fluid>
      <Navbar.Brand>
        <img
          src="./assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Netflix logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="text-white fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#link " className="text-secondary fw-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#home " className="text-secondary fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#link " className="text-secondary fw-bold">
            RecentlyAdded
          </Nav.Link>
          <Nav.Link href="#link " className="text-secondary fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <FaSearch className="text-white me-2" />
        <span className="text-white fw-bold me-2">KIDS</span>
        <IoIosNotificationsOutline className="text-white fs-4 me-4" />
        <FaRegUser className="text-white" />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
