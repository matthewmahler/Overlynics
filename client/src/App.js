import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Games from "./containers/Games";
import Graphs from "./containers/Graphs";
import Stats from "./containers/Stats";

const App = () => 
  <Router>
    <div>
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/games" component={Games}/>
        <Route exact path="/graphs" component={Graphs}/>
        <Route exact path="/stats" component={Stats}/>
        <Route
          render={() => (
          <h1 className="text-center">Page Not Found!</h1>
        )}/>
      </Switch>
    </div>
  </Router>
      


export default App;
