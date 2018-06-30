import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

class GameSidebar extends Component {


  render() {

    return (
      <div className={'sidebar col-md-3'}>

        <Dropdown
          placeholder='Select account'
          fluid
          selection
          options={this.props.accountOptions}/>
       <br></br>
        <Dropdown
          placeholder='Select seasons'
          fluid
          selection
          options={this.props.seasonOptions}/>

      </div>
    )
  }
}
export default GameSidebar