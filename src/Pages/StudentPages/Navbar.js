import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  killLogin = () => {
    this.props.handleLogin(null);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/Profile&${this.props.username}`}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/Tasks&${this.props.username}`}>
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/Assessments&${this.props.username}`}
              >
                Assessments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/Notifications&${this.props.username}`}
              >
                Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/Courses&${this.props.username}`}>
                Courses
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-danger"
            id="logout"
            onClick={this.killLogin}
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }
}
