import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Menu() {
  return (
    <>
      <div className="m-banner" style={{background:'black', display:'block', textAlign:'center', color:'white'}}>
        <span>ENVÍOS A TODO MÉXICO</span>
      </div>  

      <Navbar style={{background:'#f5f5f5'}} expand="lg">
        <Navbar.Brand style={{paddingLeft:'30px'}} as={Link} to="/"><img src="https://img.icons8.com/color/48/null/nike.png"/></Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/new">Nuevos Lanzamientos</Nav.Link>
              <NavDropdown title="Hombres" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Calzado
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Mujeres" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Calzado
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Niños" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Calzado
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/">SNKRS</Nav.Link>
            </Nav>
              <Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary">Buscar</Button>
                </Form>
                <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="login">Iniciar Sesión<noframes></noframes></NavDropdown.Item>
                <NavDropdown.Item as={Link} to="register">
                  Registro
                </NavDropdown.Item>
              </NavDropdown>
                <Nav.Link><img src="https://img.icons8.com/external-thin-kawalan-studio/24/null/external-cart-shopping-e-commerce-thin-kawalan-studio.png"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section >
          <Outlet>
          </Outlet>
      </section>
      
    </>
  );
}

export default Menu;