import React from "react";
import { PaddingStyles } from "../styles/PaddingStyles";
import { H3 } from "../styles/heading-three";
import { TaskerStyles } from "../styles/TaskerStyles";
import Button from "react-bootstrap/Button"
import Input from '@mui/material/Input';

import { CCallout } from '@coreui/react';

const Tasker = () => {
    return (
        <PaddingStyles>
            <TaskerStyles>
                <H3>Tasker</H3>
                <span>
                    <CCallout>
                        I want to  <Input placeholder="Add Task here" />  at/in <Input placeholder="Add Location" />  at <Input placeholder="Time" />
                          <Button variant="light">Add</Button>
                    </CCallout>
                </span>
            </TaskerStyles>
        </PaddingStyles>
    );

}

export default Tasker;