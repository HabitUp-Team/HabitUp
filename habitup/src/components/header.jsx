import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {SiWolfram} from 'react-icons/si';

const Header = () => {
  return (<ReactBootstrap.Navbar style={{
      backgroundColor: "#e8eef2"
    }} expand="lg">
    <ReactBootstrap.Container>
      <ReactBootstrap.Navbar.Brand href="#home"><SiWolfram/>
        <strong>HabitUp</strong>
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="me-auto">
          <ReactBootstrap.Nav.Link href="/home">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="/todo-list">Todo List</ReactBootstrap.Nav.Link>

        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Container>
  </ReactBootstrap.Navbar>);
}

export default Header;
