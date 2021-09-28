import React, { useState } from "react";
import { PaddingStyles } from "../styles/PaddingStyles";
import { H3 } from "../styles/heading-three";
import { TaskerStyles } from "../styles/TaskerStyles";
import TaskerItem from "./tasker-item";
import Button from "react-bootstrap/Button";
import Input from "@mui/material/Input";
import { CCallout } from "@coreui/react";
import { v4 as uuidv4 } from 'uuid';

const Tasker = () => {
  const [TaskerRecord, setTaskerRecord] = useState([]);
  const [Tasker, setTasker] = useState({
    taskerTask: "",
    taskerLocation: "",
    taskerTime: "",
    id: uuidv4()
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTasker({ ...Tasker, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTaskerRecord([...TaskerRecord, Tasker]);
  };
  return (
    <PaddingStyles>
      <TaskerStyles>
        <H3>Tasker</H3>
        <span>
          <CCallout>
            I want to{" "}
            <Input
              placeholder="Add Task here"
              id="taskerTask"
              name="taskerTask"
              value={Tasker.taskerTask}
              onChange={handleChange}
            />{" "}
            at/in{" "}
            <Input
              placeholder="Add Location"
              id="taskerLocation"
               name="taskerLocation"
              value={Tasker.taskerLocation}
              onChange={handleChange}
            />{" "}
            at{" "}
            <Input placeholder="Time" id="taskerTime" name="taskerTime" value={Tasker.taskerTime} onChange={handleChange} />
            <Button variant="light" type="submit" onClick={onSubmit}>
              Add
            </Button>
          </CCallout>
        </span>
        {TaskerRecord.map((props) => (
          <TaskerItem
            taskerTask={props.taskerTask}
            taskerLocation={props.taskerLocation}
            taskerTime={props.taskerTime}
            key={props.id}
          />
        ))}
      </TaskerStyles>
    </PaddingStyles>
  );
};

export default Tasker;
