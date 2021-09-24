import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { PaddingStyles } from "../styles/PaddingStyles";
import { H3 } from "../styles/heading-three";
import TodoItem from "./todo-item";
import { Username } from "../AuthData";
import { Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../FirebaseConfig";
import gettingTodoList from "../Database";

const Todo = () => {

  const [Records, setRecords] = useState([]);
  const [todoItem, setodoItem] = useState({
    todoTask: "",
    impactSign: "",
    id: uuidv4()
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setodoItem({ ...todoItem, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...Records, todoItem]);
    setodoItem({
      todoTask: "",
      impactSign: "",
      id: ""
    });

  }
  gettingTodoList().then((e) => setRecords(e));


  return (

    <PaddingStyles>
      <H3> <Username /> Todo List</H3>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="Add Task"
            autoComplete="off"
            name="todoTask"
            id="todoTask"
            value={todoItem.todoTask}
            onChange={handleChange}


          />
          <Button variant="outline-light" name="impactSign" id="impactSign" value="+" onClick={handleChange}>Positive</Button>
          <Button variant="outline-light" name="impactSign" id="impactSign" value="-" onClick={handleChange}>Negativ</Button>
          <Button variant="outline-light" name="impactSign" id="impactSign" value="=" onClick={handleChange}>Postive</Button>
          <Button variant="outline-light" type="submit">Add</Button>

        </InputGroup>
      </form>
      {Records.map((props) =>
        <TodoItem todoTask={props.todoTask} impactSign={props.impactSign} key={props.id} />
      )}
    </PaddingStyles>


  );
}

export default Todo;
