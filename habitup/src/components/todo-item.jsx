import React from "react";
import '../../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { CCallout } from '@coreui/react';

const TodoItem =(props)=>{
  return(
    <CCallout color="primary" style={{color:"#FFFFFF"}}>
{props.data}
</CCallout>
  );

}

export default TodoItem;
