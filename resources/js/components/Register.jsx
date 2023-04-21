import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Register() {
  return (
      <Card style={{width:'30rem', marginTop:'25px'}} className='mx-auto'>
        <Card.Body>
          <Card.Title className='text-center'><img src="https://img.icons8.com/color/48/null/nike.png"/></Card.Title>
        <Card.Title className="text-center">HAZTE MIEMBRO DE NIKE</Card.Title>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="password" placeholder="Correo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              
              <Button style={{width:'100%'}} variant="dark" type="submit">
                Únete
              </Button>
              <Card.Text style={{margin:'5px'}}>¿Ya eres miembro?<Card.Link style={{marginLeft:'5px'}} as={Link} to="/login">Iniciar sesión</Card.Link></Card.Text>

          </Form>
        </Card.Body>
      </Card>
  );
}

export default Register;