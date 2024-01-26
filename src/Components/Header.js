import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">University</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/departments">Departments</Nav.Link>
              <Nav.Link href="/lectors">Lectors</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header;
