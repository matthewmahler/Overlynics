import React, {Component} from 'react';
import {Consumer} from '../Context';
import GameSidebar from '../components/GameSidebar';
import MainGraph from '../components/MainGraph';
import {Redirect} from "react-router"

class Graphs extends Component {

  render() {

    return (
      <Consumer>
        {(context) => {
return context.state.loggedIn ? (
      
      <div className={'row'} >
        <div className={'col-md-3 side-bar'}>
          <GameSidebar/>  
        </div>

        <div className={'col-md-9 games-table-container'}>
       <MainGraph/>
        </div>
      </div>) : (
        <Redirect to="/" />
      )

     
    }}
    </Consumer>
    )
  }
}

export default Graphs;
