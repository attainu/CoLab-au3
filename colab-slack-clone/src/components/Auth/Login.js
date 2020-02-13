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

function Login() {
  const [name, setName] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="blue" textAlign="center">
          <Icon name="slack" color="blue" />
          Login to CoLAB
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>

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

            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to CoLAB? <Link to="/register">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
