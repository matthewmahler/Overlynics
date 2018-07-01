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

//login form

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

//login form submit

  handleFormSubmit = event => {
    event.preventDefault();    
    API.userRetrieve(this.state.email)
    .then(res => {  
      if (res.data.password === this.state.password){
        let id = res.data._id
        this.setState({loggedIn: true, currentUser: id})
      }

      this.initialAccountCall()
      this.initialSeasonCall()

    })
    .catch(err => console.log(err))
  };


//getting the list of seasons
  initialSeasonCall = () => {
    API
      .seasonRetrieve()
      .then(res => {
        let seasons = res.data
        this.setState({seasons: seasons})
        // this.mapSeasons()
      })

  };

 // getting all the accounts from the current user 
  initialAccountCall = () => {
    API
      .accountRetrieve(this.state.currentUser)
      .then(res => {
        let accounts = res.data
         
        this.setState({
          accounts: accounts
        })
        // this.mapAccounts()
      }) 
  }

  selectAccount = (event) => {
    this.setState({
      currentAccount: event.target.value
    })  
  };


  selectSeason = (event) => {
   
    this.setState({
      currentSeason: event.target.value
    })  
  };

  getGames = (event) => {
    event.preventDefault();
    API
    .gameRetrieve(this.state.currentAccount, this.state.currentSeason)
    .then(res => {
      let games = res.data
      console.log(res) 
      this.setState({
        games: games
      })
      // this.mapAccounts()
    }) 
  }




  render() {
    return (
      <MyContext.Provider value={{
        state: this.state, 
        handleFormSubmit: this.handleFormSubmit,
        handleInputChange: this.handleInputChange,
        updateAccountCall: this.updateAccountCall,
        updateSeasonCall: this.updateSeasonCall,
        selectAccount: this.selectAccount,
        selectSeason: this.selectSeason,
        getGames: this.getGames
        }}>
        {this.props.children}    
        </MyContext.Provider>
    )
  }
}
export const Consumer = MyContext.Consumer;