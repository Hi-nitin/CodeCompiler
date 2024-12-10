import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import signupMap from '../maping/signup';
import { postapi } from '../api/getpost';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import './signup.css'; // Import custom styles

function FormExample() {
  const [formData, setFd] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    cpassword: ''
  });

  const handleInput = (events) => {
    setFd({
      ...formData,
      [events.target.name]: events.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiRequest = postapi('http://localhost:7777/signup', formData);
    const apiResponse = await apiRequest;
    console.log(apiResponse);

    apiResponse.success ? alert('Successfully signed up') :
      signupMap(apiResponse.errors);

    if (apiResponse.msg === 'duplicate user') {
      alert('User is duplicate');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">JSFiddle Clone</span>
          <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <span className="nav-item nav-link">Signup page</span>
          </div>
        </div>
      </nav>

      <div className="form-example">
        <h2 className="form-title">Create an Account</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name='firstname'
                placeholder="First Name"
                onChange={handleInput}
                className="bg-dark text-white"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name='lastname'
                type="text"
                placeholder="Last Name"
                onChange={handleInput}
                className="bg-dark text-white"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                name='username'
                onChange={handleInput}
                aria-describedby="inputGroupPrepend"
                required
                className="bg-dark text-white"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name='password'
                placeholder="Enter Password"
                onChange={handleInput}
                className="bg-dark text-white"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                name='cpassword'
                placeholder="Confirm Password"
                onChange={handleInput}
                className="bg-dark text-white"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="submit-button">
            Submit Form
          </Button>
        </Form>
      </div>
    </>
  );
}

export default FormExample;
