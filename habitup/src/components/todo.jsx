import React, { useState } from "react";
import { TodoStyles } from "../styles/TodoStyles";
import { H3 } from "../styles/heading-three";
import TodoItem from "./todo-item";
import * as B from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  {/*const [TempData,setTemp]=useState("");
  const [ListItem,setItem] = useState({
    key: "",
    content: ""
  });
const ReceiveItem =(e)=>{
  setTemp(e.target.value);
}
  const ListUpdater =(TempData)=>{
    setItem(prevNotes => {
return {...prevNotes,[content]:TempData};
});
  }
  const CreateCallout=(props)=>{
  return(<TodoItem data={props.data} />);
  } */}
  return (
    <TodoStyles>
      <H3>Todo List</H3>
      <B.InputGroup className="mb-3">
        <B.FormControl
          placeholder="Add Tasks"
          aria-label="Add Tasks"
          aria-describedby="basic-addon2"

          value=""
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
      {/*ListItem.map(CreateCallout)*/}
    </TodoStyles>


  );
}

export default Todo;
