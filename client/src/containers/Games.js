import React, {Component} from 'react';
import {Consumer} from '../Context';
import GameSidebar from '../components/GameSidebar';
import GamesTable from '../components/GamesTable'
class Games extends Component {

  render() {

    return (
      <Consumer>
        {(context) => {

      return(
      <div className={'row'} >
        <div className={'col-md-3 side-bar'}>
          <GameSidebar/>  
        </div>

        <div className={'col-md-9 games-table-container'}>
       <GamesTable/>
        </div>
      </div>)
     
    }}
    </Consumer>
    )
  }
}

export default Games;
