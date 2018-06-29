import React, {Component} from 'react';
import API from '../utils/API';

class Games extends Component {

  state = {
    appData: {}
  }

  componentDidMount(){
    this.setState({appData: this.props.appState})
    this.initialCall()
  }

  initialCall = () => {
    API.accountRetrieve(this.state.appData.currentUser).then(res => { 
      console.log(res.data)
      let accounts = res.data
      this.props.updateInitialCall(accounts)
      this.setState({appData: this.props.appState})
    })

  }
 
  render() {
    return (
      <div>
        <div>haha games page btw</div>
      </div>
    )
  }
}

export default Games;
