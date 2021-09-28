import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserUid } from "../AuthData";

import { CCallout } from '@coreui/react';

const TaskerItem = (props) => {

  return (<>
    <CCallout >
     I want to {props.taskerTask} at/in {props.taskerLocation} at {props.taskerTime}
      <div>
        <IconButton aria-label="delete">
          <DeleteIcon onClick={UserUid}/>
        </IconButton>
      </div>

    </CCallout>

  </>
  );

}

export default TaskerItem;
