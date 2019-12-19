import React, { Component } from "react";
import MyNavbar from "./MyNavbar";
import Events from "./Events";
import Profile from "./Profile";
import Tasks from "./Tasks";
import Assessments from "./Assessments.js";
import Notifications from "./Notifications.js";
import Courses from "./Courses.js";
import AttendanceDetails from "./AttendanceDetails.js";
import NotFound from "./NotFound.js";
import { Jumbotron } from "react-bootstrap";

import { Route, Switch } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user };
  }

  render() {
    return (
      <div style={{ margin: "0", padding: "0" }}>
        <MyNavbar
          className="navbar"
          username={this.props.user}
          handleLogin={this.props.handleLogin}
          cookies={this.props.cookies}
        />
      <Jumbotron className="d-none d-md-block">
          <center>
            <div className="container">
              <img src="images.jpeg" alt="KCT" style={{float : 'left', width : '150px'}} />
              <img src="ece_logo.png" alt="ECE" style={{float : 'right', width : '150px'}} />
              <h1>Department of Electronics & Communication Engineering</h1>
              <h2>Kumaraguru College of Technology</h2>
            </div>
          </center>
        </Jumbotron>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Events user={this.state.user} token={this.props.token} />
            )}
          />
          <Route
            exact
            path={"/Profile"}
            component={() => (
              <Profile user={this.state.user} token={this.props.token} />
            )}
          />
          <Route
            exact
            path={"/AttendanceDetails"}
            component={() => (
              <AttendanceDetails
                user={this.state.user}
                token={this.props.token}
              />
            )}
          />
          <Route exact path={"/Tasks"} component={()=><Tasks user={this.state.user} token={this.props.token}/>} />
          <Route
            exact
            path={"/Assessments"}
            component={() => <Assessments token={this.props.token} />}
          />
          <Route
            exact
            path={"/Notifications"}
            component={() => (
              <Notifications user={this.state.user} token={this.props.token} />
            )}
          />
          <Route
            exact
            path={"/Courses"}
            component={() => <Courses token={this.props.token} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
