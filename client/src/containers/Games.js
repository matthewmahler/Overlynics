import React, {Component} from 'react';
import API from '../utils/API';
import {Consumer} from '../Context';

class Games extends Component {


  initialSeasonCall = () => {
    API
      .seasonRetrieve(this.state.appData.currentUser)
      .then(res => {
        let seasons = res.data
        this
          .props
          .updateSeasonCall(seasons)
        this.setState({appData: this.props.appState})
      })

  }
  initialAccountCall = () => {
    API
      .accountRetrieve()
      .then(res => {
        let accounts = res.data
        this
          .props
          .updateAccountCall(accounts)
         
        this.setState({
          appData: this.props.appState
        })
        
      })
     
  }

  render() {

    return (
      <Consumer>
  {(context) => {
      
      <div className={'row'}>
        <div className={'col-md-3'}>
     
        </div>
        <div className={'col-md-9'}></div>

      </div>
     
    }}
    </Consumer>
    )
  }
}

export default Games;
