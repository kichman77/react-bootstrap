import React from "react";
import { Navbar, Nav, Button, Container, Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

function NaviBar() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" />
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button className="mr-2" variant="primary">
                Log in
              </Button>
              <Button variant="primary">Sign out</Button>
            </Nav>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default NaviBar;
