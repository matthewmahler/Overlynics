import React, { Component } from "react";
import { Consumer } from "../Context";
import { Redirect } from "react-router";

class Login extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          return !context.state.loggedIn ? (
            <form className="form-horizontal">
              <fieldset>
                <legend>Log In</legend>

                <div className="form-group">
                  <div className="col-md-4">
                    <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="form-control input-md"
                      required=""
                      onChange={context.handleInputChange}
                      value={context.state.email}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-4">
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="form-control input-md"
                      required=""
                      onChange={context.handleInputChange}
                      value={context.state.password}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-4">
                    <button
                      id="singlebutton"
                      name="singlebutton"
                      className="btn btn-default"
                      onClick={context.handleFormSubmit}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          ) : (
            <Redirect to="/games" />
          );
        }}
      </Consumer>
    );
  }
}

export default Login;
