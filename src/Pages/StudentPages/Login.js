import React, { Component } from "react";
//import "./index.css";
import {Form,Button,Card,Jumbotron} from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = { username: "", password: "" };

  handleChange = event => {
    if (event.target.type === "text") {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  submit = event => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.handleLogin("17BECXXX");
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
        <center>
          <div className="container">
            <h1>Department of Electronics & Communication Engineering</h1>
            <h2>Kumaraguru College of Technology</h2>
            <h3>Student Portal - Log in</h3>
          </div>
          </center>
        </Jumbotron>
        <center>
        <Card border='primary' style={{ width: '18rem',alignItems:'center' }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="loginformusername">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="User name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="loginformpassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.submit} block={true}>
            Log in
            </Button>
          </Form>
          </Card.Body>
          </Card></center>
      </div>
    );
  }
}

export default Login;
