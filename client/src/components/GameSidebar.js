import React, {Component} from 'react'
import {Consumer} from '../Context';

class GameSidebar extends Component {


  render() {

    return (
      <Consumer>
        {(context) => {

      return(
        <div>
          <select 
          onChange={context.selectAccount}
          >
            <option value="">Select Account</option>      
            {context.state.accounts.map((e, key) => {
                return <option
                
                className={''}
                key={key} 
                value={e._id}     
                name={e.accountName}                   
                >
                {e.accountName}
              </option>
            })}
            </select>
            <br></br>
            <select 
                name="seasons" 
                onChange={context.selectSeason}
                >       
                <option value="">Select Season</option>   
                {context.state.seasons.map((e, key) => {
                    return <option
                    className={''}
                    key={key} 
                    value={e.Number}                        
                    >
                    Season: {e.Number}
                  </option>
                })}
            </select>
            <br></br>
            <button onClick={context.getGames}>
              Get Games!
              </button>
        </div>
      )
     
    }}
    </Consumer>
    )
  }
}
export default GameSidebar