import React, { Component } from "react";
import { Consumer } from "../Context";
import GameSidebar from "../components/GameSidebar";
import StatTable from "../components/StatTable";
import { Redirect } from "react-router";
class Stats extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          return context.state.loggedIn ? (
            <div className={"row"}>
              <div className={"col-md-3 side-bar"}>
                <GameSidebar />
              </div>

              <div className={"col-md-9 games-table-container"}>
                <StatTable />
              </div>
            </div>
          ) : (
            <Redirect to="/" />
          );
        }}
      </Consumer>
    );
  }
}

export default Stats;
