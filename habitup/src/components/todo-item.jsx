import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { CCallout } from '@coreui/react';

const TodoItem = () => {
  return (<>
    <CCallout color="danger" style={{ color: "#FFFFFF" }}>
      dj fskd fksjd f
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
