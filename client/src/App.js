import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Games from "./containers/Games";
import Graphs from "./containers/Graphs";
import Stats from "./containers/Stats";
import {Provider} from './Context'

class App extends Component {

   render() {
    return (    
<Provider>
      <Router>
        <div>
          <Navbar/>
          <Switch> 
          
            <Route
              exact
              path="/"
              render={() => <Login/>}            
              />   
          
            <Route exact path="/signup" render={() => <Signup/>}/>
            <Route
              exact
              path="/games"
              render={() => <Games
                />}/>
            <Route exact path="/graphs" render={() => <Graphs/>}/>

            <Route exact path="/stats" render={() => <Stats/>}/>

            <Route
              render={() => (
              <h1 className="text-center">Page Not Found!</h1>
            )}/>
          </Switch>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
