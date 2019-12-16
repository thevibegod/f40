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
            <Link className="nav-link" to={`/Profile&${this.props.username}`}>
              Profile
            </Link>
            <Link className="nav-link" to={`/Tasks&${this.props.username}`}>
              Tasks
            </Link>
            <Link
              className="nav-link"
              to={`/Assessments&${this.props.username}`}
            >
              Assessments
            </Link>
            <Link
              className="nav-link"
              to={`/AttendanceDetails&${this.props.username}`}
            >
              Attendance
            </Link>
            <Link
              className="nav-link"
              to={`/Notifications&${this.props.username}`}
            >
              Notifications
            </Link>
            <Link className="nav-link" to={`/Courses&${this.props.username}`}>
              Courses
            </Link>
          </Nav>
          <Link className="nav-link" to={`/`} onClick={this.killLogin}>
            Logout
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
