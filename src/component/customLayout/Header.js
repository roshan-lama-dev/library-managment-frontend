import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const Header = ({ currentUser }) => {
  console.log(currentUser);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser?._id ? (
              <>
                <div className="d-flex align-items-center justify-center gap-2 m-2">
                  <i className="fa-solid fa-user"></i>
                  Welcome {currentUser.fName}
                </div>
                <Link to="/" onClick={handleLogout} className="nav-link">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
