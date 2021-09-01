import React from "react";
import {TodoStyles} from "../styles/TodoStyles";
import {H3} from "../styles/heading-three";
import * as B from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () =>{
  return (
    <TodoStyles>
      <H3>Todo List</H3>
      <B.InputGroup className="mb-3">
     <B.FormControl
       placeholder="Add Tasks"
       aria-label="Add Tasks"
       aria-describedby="basic-addon2"
     />

     <B.SplitButton
      variant="outline-secondary"
      title="Add"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <B.Dropdown.Item href="#">+</B.Dropdown.Item>
      <B.Dropdown.Item href="#">-</B.Dropdown.Item>
      <B.Dropdown.Item href="#">=</B.Dropdown.Item>


    </B.SplitButton>
   </B.InputGroup>
    </TodoStyles>


  );
}

export default Todo;
