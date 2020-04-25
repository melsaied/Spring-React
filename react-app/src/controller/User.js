import React, { Component } from "react";
class User extends Component {
  state = { List: [], isLoading: true };

  async componentDidMount() {
    const response = await fetch("/user/users");
    const body = await response.json();

    this.setState({
      List: body,
      isLoading: false,
    });
  }

  render() {
    const { List, isLoading } = this.state;

    if (isLoading) return <div key={1}>Loading...</div>;

    return (
      <div>
        <h1>User</h1>

        {List.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    );
  }
}

export default User;
