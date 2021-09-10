import React from "react";
import { TodoStyles } from "../styles/TodoStyles";
import { H3 } from "../styles/heading-three";
import TodoItem from "./todo-item";
import AuthData from "../AuthData";
import * as B from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {

  return (
    <TodoStyles>
      <H3><AuthData /> Todo List</H3>
      <B.InputGroup className="mb-3">
        <B.FormControl
          placeholder="Add Tasks"
          aria-label="Add Tasks"
          aria-describedby="basic-addon2"
        />

        <B.SplitButton
          variant="outline-light"
          title="Add"
          id="segmented-button-dropdown-2"
          alignRight
          align="end"

        >
          <B.Dropdown.Item href="#">+</B.Dropdown.Item>
          <B.Dropdown.Item href="#">-</B.Dropdown.Item>
          <B.Dropdown.Item href="#">=</B.Dropdown.Item>


        </B.SplitButton>
      </B.InputGroup>
      <TodoItem />
      <TodoItem />
    </TodoStyles>


  );
}

export default Todo;
