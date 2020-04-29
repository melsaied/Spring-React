import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label, Table } from "reactstrap";
import AppNavbar from "../ components/AppNavbar";

class Expense extends Component {
  empty = {
    description: "Added Business trip",
    location: "Added New York",
    expenseDate: "",
    user: { id: 12 },
    category: { id: 12 },
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listCategory: [],
      isLoading: true,
      page: this.empty,
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.handelDateChange = this.handelDateChange.bind(this);
  }

  async componentDidMount() {
    const body = await fetch("/expense/expenses").then((response) =>
      response.json()
    );
    const responseCategory = await fetch("category/categorys");
    const bodyCategory = await responseCategory.json();
    this.setState({ list: body, listCategory: bodyCategory, isLoading: false });
  }

  handelDateChange(date) {
    let page = { ...this.state.page };
    page.expenseDate = date;
    this.setState({ page });
  }

  handelChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let page = { ...this.state.page };
    page[name] = value;
    this.setState({ page });
  }

  async handelSubmit(event) {
    const page = this.state.page;
    let body = "";
    await fetch(`expense/expenses`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(page),
    });
    event.preventDefault();
    this.props.history.push("/expense");
    console.log(body);
  }

  async remove(id) {
    await fetch(`expense/expenses/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedList = [...this.state.list].filter((i) => i.id !== id);
      this.setState({ list: updatedList });
    });
  }

  render() {
    const { list, listCategory, isLoading } = this.state;
    const title = <h2>Add Expense</h2>;

    if (isLoading) return <div key={1}>Loading...</div>;

    let optionCategoryList = listCategory.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));

    let rows = list.map((item) => (
      <tr key={item.id}>
        <th>{item.id}</th>
        <td>{item.description}</td>
        <td>
          <Moment date={item.expenseDate} format="MM/DD/YYYY" />
        </td>
        <td>{item.location}</td>
        <td>{item.category.name}</td>
        <td>{item.user.name}</td>
        <td>
          <Button
            color="danger"
            onClick={() => {
              this.remove(item.id);
            }}
          >
            DELETE
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        <AppNavbar />

        <Container>
          {title}
          <Form onSubmit={this.handelSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>

              <Input
                type="text"
                name="description"
                onChange={this.handelChange}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="title">Category</Label>

              <select onChange={this.handelChange} name="category">
                <option key="0" value="0">
                  select
                </option>
                {optionCategoryList}
              </select>
            </FormGroup>

            <FormGroup>
              <Label for="title">Expense date</Label>

              <DatePicker
                selected={this.state.page.expenseDate}
                onChange={this.handelDateChange}
              ></DatePicker>
            </FormGroup>

            <FormGroup>
              <Label for="title">Location </Label>

              <Input
                type="text"
                name="location"
                onChange={this.handelChange}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/category">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>

        <Container>
          <Table>
            <thead>
              <tr>
                <th> ID </th>
                <th> DESCRIPTION </th>
                <th> EXPENSE_DATE </th>
                <th> LOCATION </th>
                <th> CATEGORY_ID </th>
                <th> USER_ID </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>

        <div>{list.id}</div>
      </div>
    );
  }
}

export default Expense;
