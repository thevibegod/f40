import React from "react";
import axios from "axios";
import { Card, Image, Row } from "react-bootstrap";
import Loading from "./Loading";
import server from "../../config/server";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    profileDetails: {},
    profilePicture: {},
    profileLoading: true,
    profilePictureLoading: true
  };

  componentDidMount() {
    const headers = {
      "Content-Type": "application/json",
      "X-Access-Token": this.props.token
    };

    axios
      .get(server + `/studentprofiledetails?rollNo=${this.props.user}`, {
        headers
      })
      .then(res =>
        this.setState({ profileDetails: res.data, profileLoading: false })
      )
      .then(() =>
        fetch(server + `/studentprofilepicture?rollNo=${this.props.user}`, {
          headers
        })
      )
      .then(res => res.blob())
      .then(blob =>
        this.setState({
          profilePicture: URL.createObjectURL(blob),
          profilePictureLoading: false
        })
      )
      .catch(err => {
        throw err;
      });
  }

  Achievements = (achievements) => {
    if (achievements === undefined || achievements.length === 0) {
      return null;
    }
    return (
      <Card className="col-12" >
        <div>
          <b>Achievements</b>
          <ol>
            {achievements.map(data => {
              return <li>{data}</li>;
            })}
          </ol>
        </div>
      </Card>
    );
  };

  render() {
    if (!this.state.profileDetails && !this.state.profileLoading) {
      return (
        <div className="container">
          <center>
            <h1>My Profile</h1>
          </center>

          <div className="alert alert-danger">No Profile Data found</div>
        </div>
      );
    }
    return (
      <div className="container">
        <center>
          <h1>My Profile</h1>
        </center>

        <div
          className="row justify-content-center"
          style={{ border: "1px solid black", margin: "10px", padding: "5px" }}
        >
          <div className="col-12 col-md-6">
            {this.state.profilePictureLoading ? (
              <Loading />
            ) : (
              <center>
                <img
                  className="card-img rounded-circle top"
                  style={{ width: "250px", height: "300px" }}
                  src={this.state.profilePicture}
                  alt={this.state.profileDetails.name}
                />
              </center>
            )}
          </div>
          <div className="col-10 offset-2 col-md-5 offset-md-1">
            {this.state.profileLoading ? (
              <Loading />
            ) : (
              <div>
                <p></p>
                <br />
                <p>
                  <b>Name: </b>
                  {this.state.profileDetails.name}
                </p>
                <p>
                  <b>RollNo:</b>
                  {this.state.profileDetails.rollNo}
                </p>
                <p>
                  <b>Batch:</b>
                  {this.state.profileDetails.batch}
                </p>
                <p>
                  <b>Email:</b>
                  {this.state.profileDetails.mailId}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="row justify-content-cente" style={{ border: "1px solid black", margin: "10px", padding: "5px"}}>
          <Card className="col-12 col-md-6">

            {this.state.profileLoading ? (
              <div>
              <h3>Student Mentor Details</h3>
              <Loading />
              </div>
            ) : (
              <div>
              <h3>Student Mentor Details</h3>
                <p>
                  <b>Name:</b>
                  {this.state.profileDetails.studentMentorName}
                </p>
                <p>
                  <b>Email:</b>
                  {this.state.profileDetails.studentMentorMail}
                </p>
                <p>
                  <b>Contact No.:</b>
                  {this.state.profileDetails.studentMentorPhone}
                </p>
              </div>
            )}
          </Card>
          <Card className="col-12 col-md-6">
            {this.state.profileLoading ? (
              <div>
                <h3>Faculty Mentor Details</h3>
              <Loading />
              </div>
            ) : (
              <div>
                <h3>Faculty Mentor Details</h3>
                <p>
                  <b>Name:</b>
                  {this.state.profileDetails.facultyMentorName}
                </p>
                <p>
                  <b>Email:</b>
                  {this.state.profileDetails.facultyMentorMail}
                </p>
                <p>
                  <b>Contact No.:</b>
                  {this.state.profileDetails.facultyMentorPhone}
                </p>
              </div>
            )}
          </Card>
        </div>
        <div className="row justify-content-center" style={{ border: "1px solid black", margin: "10px", padding: "5px" }}>
          {this.Achievements(this.state.profileDetails.achievements)}
        </div>
      </div>
    );
  }
}
