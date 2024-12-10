import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postapi } from '../api/getpost';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap CSS
import './Login.css'; // Import custom styles if needed

function Login() {
  const navigate = useNavigate();
  const [usernameE, setUsernameE] = useState();
  const [passReqError, setPassReqError] = useState();
  const [loginDetail, setLD] = useState({ username: '', password: '' });

  const handleInput = (event) => {
    setLD({
      ...loginDetail,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = async (p) => {
    p.preventDefault();

    const response = await postapi('http://localhost:7777/login', loginDetail);

    if (response.msg === 'login') {
      Cookies.set('token', response.token, { expires: 1 / 24 });
      navigate('/');
    }

    if (response.msg === 'User not found') {
      setUsernameE(response.msg);
    }
    if (response.msg === 'incorrect password') {
      setPassReqError(response.msg);
    }

    if (response.errors) {
      response.errors.forEach((val) => {
        if (val.msg === 'Username is required') {
          setUsernameE(val.msg);
        }
        if (val.msg === 'Password is required') {
          setPassReqError(val.msg);
        }
      });
    }
  };

  const handleSignup = () => {
    Cookies.set('setname', 'hari thapa', { expires: 7 });
    navigate('/signup'); 
  };

  return (
    <div className="login-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">JSFiddle Clone</span>
          <div className="navbar-nav ms-auto">
            <span className="nav-item nav-link">Login page</span>
          </div>
        </div>
      </nav>
      
      <div className="login-container">
        <h2 className="form-title">Login</h2>
        <Form onSubmit={handleLogin} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleInput}
              placeholder="Enter your username"
              isInvalid={!!usernameE}
              className="bg-dark text-white"
            />
            <Form.Control.Feedback type="invalid">{usernameE}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Enter your password"
              isInvalid={!!passReqError}
              className="bg-dark text-white"
            />
            <Form.Control.Feedback type="invalid">{passReqError}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
          <Button variant="link" onClick={handleSignup} className="signup-button">
            Don't have an account? Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
