import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { CCallout } from '@coreui/react';

const TodoItem = (props) => {

  return (<>
    <CCallout color={props.impactSign==="+"?"info":props.impactSign==="-"?"danger":"warning"} style={{color:"#FFFFFF"}}>
      {props.todoTask} {props.impactSign}
      <div>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>

    </CCallout>

  </>
  );

}

export default TodoItem;
