import React, { useState, Component } from "react";
import Login from "./Pages/StudentPages/Login";
import Home from "./Pages/StudentPages/Home";
import { withCookies } from "react-cookie";

<<<<<<< HEAD
export default function App() {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState('')

  const handleLogin = (user,token)=>{setUser(user);setToken(token)}

  if (user) {
      return <Home user={user} token={token} handleLogin={handleLogin} />;
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
=======
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
>>>>>>> ec7ff6c5a46b84ebaad01eaaa62b93552084b168
}
export default withCookies(App);
