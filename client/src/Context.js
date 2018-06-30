import React, {Component} from 'react'
import API from './utils/API'

const MyContext = React.createContext()

export class Provider extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    sessions: [],
    games: [],
    accounts: [],
    seasons: [],
    currentsessionID: "",
    currentAccount: "",
    currentUser: "",
    selectedSeason: 0,
    currentSeason: 0,
  }
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();    
    API.userRetrieve(this.state.email)
    .then(res => {  
      if (res.data.password === this.state.password){
        let id = res.data._id
        this.setState({loggedIn: true, currentUser: id})
      }
    })
    .catch(err => console.log(err))
  };


  render() {
    return (
      <MyContext.Provider value={{
        state: this.state, 
        handleFormSubmit: this.handleFormSubmit,
        handleInputChange: this.handleInputChange,
        updateAccountCall: this.updateAccountCall,
        updateSeasonCall: this.updateSeasonCall
        }}>
        {this.props.children}    
        </MyContext.Provider>
    )
  }
}
export const Consumer = MyContext.Consumer;