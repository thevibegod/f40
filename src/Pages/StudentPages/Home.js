import React, { Component } from 'react';
import Navbar from './Navbar';
import Events from './Events';
import Profile from './Profile';
import Tasks from './Tasks';
import Assessments from './Assessments.js';
import Notifications from './Notifications.js';
import Courses from './Courses.js';
import NotFound from './NotFound.js';

import './index.css';
import {Route,Switch} from 'react-router-dom';

export default class Home extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div style={{margin:'0',padding:'0'}}>
        <Navbar className="navbar" username={this.props.user} handleLogin={this.props.handleLogin}/>
        <Switch>
          <Route exact path='/' component={Events}/>
          <Route exact path={`/Profile&${this.props.user}`} component={Profile}/>
          <Route exact path={`/Tasks&${this.props.user}`} component={Tasks}/>
          <Route exact path={`/Assessments&${this.props.user}`} component={Assessments}/>
          <Route exact path={`/Notifications&${this.props.user}`} component={Notifications}/>
          <Route exact path={`/Courses&${this.props.user}`} component={Courses}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
