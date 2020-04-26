import React, { Component } from "react";
import AppNavbar from "../ components/AppNavbar";

class Category extends Component {
  state = { List: [], isLoading: true };

  async componentDidMount() {
    const response = await fetch("category/categorys");
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
        <AppNavbar />
        <h1>Category</h1>
        {List.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    );
  }
}

export default Category;
