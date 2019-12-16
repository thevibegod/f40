import React, { useState, Component } from "react";
import Login from "./Pages/StudentPages/Login";
import Home from "./Pages/StudentPages/Home";
import { withCookies } from "react-cookie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, token: "" };
  }
  render() {
    if (this.state.user) {
      return (
        <Home
          user={this.state.user}
          token={this.state.token}
          handleLogin={(user, token) => {
            this.setState({ user, token });
          }}
        />
      );
    }

    return (
      <div>
        <Login
          handleLogin={(user, token) => {
            this.setState({ user, token });
          }}
        />
      </div>
    );
  }
}
export default withCookies(App);
