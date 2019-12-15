import React, { Component } from "react";
import MyNavbar from "./MyNavbar";
import Events from "./Events";
import Profile from "./Profile";
import Tasks from "./Tasks";
import Assessments from "./Assessments.js";
import Notifications from "./Notifications.js";
import Courses from "./Courses.js";
import AttendanceDetails from './AttendanceDetails.js';
import NotFound from "./NotFound.js";
import {Jumbotron} from 'react-bootstrap';

//import './index.css';
import { Route, Switch } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state={user:this.props.user}
  }

  render() {
    return (
      <div style={{ margin: "0", padding: "0" }}>
        <MyNavbar
          className="navbar"
          username={this.props.user}
          handleLogin={this.props.handleLogin}
        />
        <Jumbotron>
          <center>
            <div className="container">
              <h1>Department of Electronics & Communication Engineering</h1>
              <h2>Kumaraguru College of Technology</h2>
            </div>
          </center>
        </Jumbotron>
        <Switch>
          <Route exact path="/" component={()=><Events user={this.state.user} token={this.props.token}/>} />
          <Route
            exact
            path={`/Profile&${this.props.user}`}
            component={()=><Profile user={this.state.user} token={this.props.token}/>}
          />
          <Route
            exact
            path={`/AttendanceDetails&${this.props.user}`}
            component={()=><AttendanceDetails user={this.state.user} token={this.props.token}/>}
          />
          <Route exact path={`/Tasks&${this.props.user}`} component={Tasks} />
          <Route
            exact
            path={`/Assessments&${this.props.user}`}
            component={()=><Assessments token={this.props.token}/>}
          />
          <Route
            exact
            path={`/Notifications&${this.props.user}`}
            component={()=><Notifications user={this.state.user} token={this.props.token}/>}
          />
          <Route
            exact
            path={`/Courses&${this.props.user}`}
            component={()=><Courses token={this.props.token}/>}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
