import React from "react";
import { Card, Button } from "react-bootstrap";
import { Center } from "../styles/Center";
import { LoginLoginStyle } from "../styles/LoginLogoutStyle";
import { TextCenter } from "../styles/TextCenter";


const LoginLogout = (props) => {
    return (
        <LoginLoginStyle>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header><TextCenter>{props.email}</TextCenter></Card.Header>
                <Card.Body>
                    <Card.Title><TextCenter>{props.name}</TextCenter></Card.Title>
                    <Card.Text>
                        <Center><Button onClick={props.state}>{props.buttonName}</Button></Center>
                    </Card.Text>
                </Card.Body>
            </Card>
        </LoginLoginStyle>
    );
}

export default LoginLogout;