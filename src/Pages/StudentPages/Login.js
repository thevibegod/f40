import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Card, Jumbotron } from "react-bootstrap";
import Loading from "./Loading";

import server from "../../config/server";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = { username: "", password: "", loading: false, incorrect: false };

  handleChange = event => {
    if (event.target.type === "text") {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  submit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .post(server + "/validateuser", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (response.data.success) {
          this.props.handleLogin(this.state.username, response.data.token);
        } else {
          this.setState({ loading: false, incorrect: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    if (!this.state.loading) {
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
            <Card
              shadow="sm"
              border="primary"
              style={{ width: "18rem", alignItems: "center" }}
            >
              <Card.Body>
                <Form onSubmit={this.submit}>
                  <Form.Group controlId="loginformusername">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder="User name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="loginformpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" block={true}>
                    Log in
                  </Button>
                </Form>
              </Card.Body>
              {this.state.incorrect && (
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Login Failed!</strong> Invalid Username or Password
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
            </Card>
          </center>
        </div>
      );
    } else {
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
            <Loading />
          </center>
        </div>
      );
    }
  }
}

export default Login;
