import React, { Component } from "react";
import AppNavbar from "../ components/AppNavbar";
class User extends Component {
  state = { list: [], isLoading: true };

  async componentDidMount() {
    const response = await fetch("/user/users");
    const body = await response.json();

    this.setState({
      list: body,
      isLoading: false,
    });
  }

  render() {
    const { list, isLoading } = this.state;

    if (isLoading) return <div key={1}>Loading...</div>;

    return (
      <div>
        <AppNavbar />
        <h1>User</h1>
        {list.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  }
}

export default User;
