import React, { useState } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";

import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="teal" textAlign="center">
          <Icon name="slack" color="teal" />
          Register to CoLAB
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={name.userName}
              onChange={e => setName({ ...name, userName: e.target.value })}
              type="text"
            />

            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              value={name.email}
              onChange={e => setName({ ...name, email: e.target.value })}
              type="email"
            />

            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              value={name.password}
              onChange={e => setName({ ...name, password: e.target.value })}
              type="password"
            />

            <Form.Input
              fluid
              name="passwordConfirmation"
              icon="repeat"
              iconPosition="left"
              placeholder="Password Confirmation"
              value={name.confirmPassword}
              onChange={e =>
                setName({ ...name, confirmPassword: e.target.value })
              }
              type="password"
            />

            <Button color="teal" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a user? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Register;
