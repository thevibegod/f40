import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  killLogin = () => {
    this.props.cookies.remove("user");
    this.props.cookies.remove("token");
    this.props.handleLogin(null);
  };

  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Navbar.Toggle
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/Profile"}>
              Profile
            </Link>
            <Link className="nav-link" to={"/Tasks"}>
              Tasks
            </Link>
            <Link className="nav-link" to={"/Assessments"}>
              Assessments
            </Link>
            <Link className="nav-link" to={"/AttendanceDetails"}>
              Attendance
            </Link>
            <Link className="nav-link" to={"/Notifications"}>
              Notifications
            </Link>
            <Link className="nav-link" to={"/Courses"}>
              Courses
            </Link>
          </Nav>
          <span className="navbar-text mr-2">Hi {this.props.username} !</span>
          <Link
            className="btn btn-outline-danger"
            to={"/"}
            onClick={this.killLogin}
          >
            Logout
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
