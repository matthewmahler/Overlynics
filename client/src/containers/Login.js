import React, { Component  } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  };



  render() {
    return (
      <div className='login-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
             value={this.state.email}
             name="email"
             onChange={this.handleInputChange}
             type="text" />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            />

            <Button color='black' fluid size='large' onClick={this.handleFormSubmit}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

export default Login;


