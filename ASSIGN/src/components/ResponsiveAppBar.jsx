
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import "../components/AppBar.css"
export const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
   
    navigate('/');
  };
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">DRIPKART</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          
          </Nav>
          <Form className="d-flex" >
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            {/* <Button variant="outline-success" style={{marginRight:"100px"}} >Search</Button> */}
            <NavDropdown title={<i class="fa-solid fa-user"></i>} id="navbarScrollingDropdown" style={{marginRight:"50px", marginTop:"10px"}} >
              <NavDropdown.Item href="#action3" >
                <Link to={"/admin"} style={{textDecoration:"none", textTransform:"uppercase", color:"black"}}>Admin Dashboard</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              {isLoggedIn && (
                <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </>
              )}
             
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ResponsiveAppBar