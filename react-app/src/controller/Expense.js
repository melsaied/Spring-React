import React, { Component } from "react";
import AppNavbar from "../ components/AppNavbar";
import {
  Container,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Expense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      listCategory: [],
      sLoading: true,
      startDate: new Date(),
    };
  }

  async componentDidMount() {
    const response = await fetch("/expense/expenses");
    const body = await response.json();
    const responseCategory = await fetch("category/categorys");
    const bodyCategory = await responseCategory.json();
    this.setState({ list: body, listCategory: bodyCategory, isLoading: false });
  }

  handleChange;

  render() {
    const { list, listCategory, isLoading } = this.state;
    const title = <h2>Add Expense</h2>;

    if (isLoading) return <div key={1}>Loading...</div>;

    let optionCategoryList = listCategory.map((item) => (
      <option key={item.id}>{item.name}</option>
    ));

    let rows = list.map((item) => (
      <tbody>
        <tr>
          <th>{item.id}</th>
          <td>{item.description}</td>
          <td>{item.expenseDate}</td>
          <td>{item.location}</td>
          <td>{item.category.name}</td>
          <td>{item.user.name}</td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    ));

    return (
      <div>
        <AppNavbar />

        <Container>
          {title}
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>

              <Input
                type="text"
                name="title"
                id="title"
                onChange={this.handelChange}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="title">Category</Label>

              <select>{optionCategoryList}</select>
            </FormGroup>

            <FormGroup>
              <Label for="title">Expense date</Label>

              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              ></DatePicker>
            </FormGroup>

            <FormGroup>
              <Label for="title">Location </Label>

              <Input
                type="text"
                name="title"
                id="title"
                onChange={this.handelChange}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>

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

            {rows}
          </Table>
        </Container>

        <h1>Expense</h1>

        <div>{list.id}</div>
      </div>
    );
  }
}

export default Expense;
