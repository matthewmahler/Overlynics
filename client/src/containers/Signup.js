import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import API from "../utils/API";
import { Redirect } from "react-router";

class Signup extends Component {
  state = {
    loggedIn: false,
    email: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.userSave({
      email: this.state.email,
      password: this.state.password
    })
      .then(res =>
        this.setState({
          loggedIn: true
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/games" />;
    }

    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              Sign up for a new account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                />

                <Button
                  color="black"
                  fluid
                  size="large"
                  onClick={this.handleFormSubmit}
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Have an account? <a href="/signup">Log In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;
