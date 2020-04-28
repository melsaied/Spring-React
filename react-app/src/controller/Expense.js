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
    const body = await fetch("/expense/expenses").then((response) =>
      response.json()
    );
    const responseCategory = await fetch("category/categorys");
    const bodyCategory = await responseCategory.json();
    this.setState({ list: body, listCategory: bodyCategory, isLoading: false });
  }

  async remove(id) {
    await fetch(`/expense/expenses/${id}`, {
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

  handleChange;

  render() {
    const { list, listCategory, isLoading } = this.state;
    const title = <h2>Add Expense</h2>;

    if (isLoading) return <div key={1}>Loading...</div>;

    let optionCategoryList = listCategory.map((item) => (
      <option key={item.id}>{item.name}</option>
    ));

    let rows = list.map((item) => (
      <tr key={item.id}>
        <th>{item.id}</th>
        <td>{item.description}</td>
        <td>{item.expenseDate}</td>
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
