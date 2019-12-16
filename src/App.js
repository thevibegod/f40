import React, { useState, Component } from "react";
import Login from "./Pages/StudentPages/Login";
import Home from "./Pages/StudentPages/Home";
import { withCookies } from "react-cookie";

class App extends Component {
  constructor(props) {
    super(props);
    //If token already exists in cookie, use that
    if (props.cookies.get("user") && props.cookies.get("token")) {
      this.state = {
        user: props.cookies.get("user"),
        token: props.cookies.get("token")
      };
    } else this.state = { user: null, token: "" };
  }

  handleLogin = (user, token) => {
    this.setState({ user, token });
  };

  render() {
    if (this.state.user) {
      return (
        <Home
          user={this.state.user}
          token={this.state.token}
          handleLogin={this.handleLogin}
          cookies={this.props.cookies}
        />
      );
    }

    return (
      <div>
        <Login cookies={this.props.cookies} handleLogin={this.handleLogin} />
      </div>
    );
  }
}
export default withCookies(App);
