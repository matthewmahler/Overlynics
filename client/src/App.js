import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Games from "./containers/Games";
import Graphs from "./containers/Graphs";
import Stats from "./containers/Stats";

class App extends Component {

  state = {
    loggedIn: false,
    sessions: [],
    games: [],
    accounts: [],
    currentsessionID: "",
    currentAccount: "",
    currentUser: "",
    selectedSeason: 0,
    currentSeason: 0
  }

  updateLogin = (id) => {
    this.setState({loggedIn: true, currentUser: id})
  }

  updateInitialCall = (accounts) => {
    this.setState({accounts: accounts}
    )}

  render() {

    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login updateLogin={this.updateLogin} loggedIn={this.state.loggedIn}/>}/>
            <Route exact path="/signup" render={() => <Signup appState={this.state}/>}/>

            <Route
              exact
              path="/games"
              render={() => <Games appState={this.state} updateInitialCall={this.updateInitialCall}/>}/>

            <Route exact path="/graphs" render={() => <Graphs appState={this.state}/>}/>

            <Route exact path="/stats" render={() => <Stats appState={this.state}/>}/>

            <Route
              render={() => (
              <h1 className="text-center">Page Not Found!</h1>
            )}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
