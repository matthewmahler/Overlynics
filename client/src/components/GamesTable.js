import React, {Component} from 'react'
import {Consumer} from '../Context';

class GamesTable extends Component {


  render() {

    return (
      <Consumer>
        {(context) => {

      return(
        <div>
  <div className="row">
    <div className="col-md-12 text-center"> 
      <h1>
     {context.state.currentAccountName}
     </h1>
     <h2>
     Season: {context.state.currentSeason}

      </h2>
        </div>
          </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table table-hover" id='season-table'>
                  <thead id="table-header">
                    <tr>
                      <th>Game</th>
                      <th>Win/Loss</th>
                      <th>SR Change</th>
                      <th>Rank</th>
                      <th>
                        Wins/Losses
                      </th>
                      <th>Map</th>
                    </tr>
                  </thead>
              <tbody>
               
              {context.state.games.map((game, key) => {
             
                
                

            return <tr key={key}>
            
            <td >{game.seasonGameNumber}</td>

                 {
                ((game.isPlacement) || (game.map === "Placement")) ? (<td></td>) 
                : ( 
                  (game.rank === context.state.games[key - 1].rank)?(
                    <td>D</td>
                  ):
                    (game.rank > context.state.games[key - 1].rank)
                    ? 
                    (<td>W</td>) 
                    : 
                    (<td>L</td>)
            
                  )

              }

              {
                (game.isPlacement) || (game.map === "Placement") ? 
                (<td></td>) 
                : 
                (<td>{game.rank - context.state.games[key - 1].rank}</td>)
              }

              {
                (game.isPlacement) ? 
                (<td>{key + 1}/10</td>) 
                : 
                (<td>{game.rank}</td>)
              }

              <td>Streak: Coming Soon</td>
              <td>{game.map}</td>

          
              </tr>
             
        })}
         <tr>
         <td></td>
          <td></td>
           <td></td>
           <td>
           <input name="newRank" type="number" placeholder="rank" className="form-control input-md" required="" onChange={context.handleRankChange} value={context.state.newRank}></input>
           </td>
            <td></td>
           <td>
           <input name="newMap" type="text" placeholder="map" className="form-control input-md" required="" onChange={context.handleInputChange} value={context.state.newMap}></input>
           </td>
             </tr>
             
             
             
                </tbody>
              </table>
              <button id="singlebutton" name="singlebutton" className="btn btn-default" onClick={context.handleGameSubmit}>Enter New Game</button>
            </div>
          </div>
          </div>
      )
     
    }}
    </Consumer>
    )
  }
}
export default GamesTable