import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AiFillGolden } from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="border">
      <Container>
        <Navbar.Brand href="/">
          <Navbar.Brand href="/">
            <AiFillGolden size={30} />
            Portfolio_Frontend
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/projects">Проекты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
