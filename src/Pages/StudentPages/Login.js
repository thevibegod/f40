import React, { Component } from "react";
//import "./index.css";

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
        <div className="jumbotron text-center">
          <div clasName="container">
            <h1>Department of Electronics & Communication Engineering</h1>
            <h2>Kumaraguru College of Technology</h2>
            <h3>Student Portal - Log in</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card shadow">
            <form className="card-body">
              <div className="form-group form-group-lg">
                <label>User Name</label>
                <br />
                <input
                  clasName="form-control form-control-lg"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <br />
                <input
                  clasName="form-control form-control-lg"
                  type="password"
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <input
                className="form-control form-control-lg btn btn-primary"
                type="button"
                onClick={this.submit}
                value="Log in"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
