import React, { Component } from 'react'
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
    currentStats: {},
    currentsessionID: "5b3577e92b10b6d743455483",
    currentAccount: "",
    currentAccountName: "",
    currentPlatform: "",
    currentUser: "",
    selectedSeason: 0,
    currentSeason: 0,
    newRank: 0,
    newMap: "",
    graphData: [],
    allUserGames: [],
    allCurrentAccountGames: [],
    allCurrentSeasonGames: []

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
        if (res.data.password === this.state.password) {
          let id = res.data._id
          this.setState({
            loggedIn: true,
            currentUser: id
          })
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
        this.setState({
          seasons: seasons
        })
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
      })
  }

  //sets current account state

  selectAccount = (event) => {
    this.setState({
      currentAccountName: this.state.accounts[event.target.selectedIndex - 1].accountName,
      currentAccount: event.target.value,
      currentPlatform: this.state.accounts[event.target.selectedIndex - 1].platform
    })
  };

  //sets current season state

  selectSeason = (event) => {
    this.setState({
      currentSeason: event.target.value
    })
  };

  //gets games from the database @ current account and season

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
      this.repackageData()
      this.getAllAccountGames();
      this.getAllSeasonGames();
      })
     
      this.getAllGames(this.state.currentUser);
      this.getStats(this.state.currentAccountName)
  }

getAllGames = () => {
      //all games for all acounts
      API
      .gameRetrieveAll(this.state.currentUser)
      .then(res => {
        let games = res.data
        console.log(res)
        this.setState({
          allUserGames: games
        })
      })
}

getAllAccountGames = () => {
  API
  .gameRetrieveAccountAll(this.state.currentAccount)
  .then(res => {
    let games = res.data
    console.log(res)
    this.setState({
      allCurrentAccountGames: games
    })
  })
}

getAllSeasonGames = () => {
  //all games for all acounts
  API
  .gameRetrieveSeasonAll(this.state.currentSeason, this.state.currentUser)
  .then(res => {
    let games = res.data
    console.log(res)
    this.setState({
      allCurrentSeasonGames: games
    })
  })
}

  //rank has to be an integer so we parse it here

  handleRankChange = event => {
    let value = parseInt(event.target.value, 10);
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  //enter a new game into 

  handleGameSubmit = event => {
    event.preventDefault();
    if (this.state.games.length > 0) {

      API.gameSave(this.state.currentUser, this.state.currentAccount, this.state.currentsessionID, this.state.currentSeason, this.state.games[this.state.games.length - 1].sessionGameNumber + 1, this.state.games[this.state.games.length - 1].seasonGameNumber + 1, this.state.games[this.state.games.length - 1].accountGameNumber + 1, this.state.newRank, this.state.newMap, false)
        .then(res => {
          console.log(res)
          this.getNewGames()
        })
        .catch(err => console.log(err))

    } else {
      API.gameSave(this.state.currentUser, this.state.currentAccount, this.state.currentsessionID, this.state.currentSeason, 1, 1, 1, this.state.newRank, this.state.newMap, false,

        )
        .then(res => {
          console.log(res)
          this.getNewGames()
        })
        .catch(err => console.log(err))
    }
  };

  getNewGames = () => {
    API
      .gameRetrieve(this.state.currentAccount, this.state.currentSeason)
      .then(res => {
        let games = res.data
        console.log(res)
        this.setState({
          games: games,
          newMap: "",
          newRank: 0
        })

      })
  }
  repackageData = () => {
    let tempData = this.state.games.map(game => ({ x: game.seasonGameNumber, y: game.rank }));

      this.setState({
        graphData: tempData
      })
  }

  getStats = () => {
    API
      .owapiCall(this.state.currentAccountName, this.state.currentPlatform)
      .then(res => {
        let stats = res.data
        console.log(stats)
        this.setState({
         currentStats: stats
        })

      })
  }

  render() {
    return ( <MyContext.Provider value = {
        {
          state: this.state,
          handleFormSubmit: this.handleFormSubmit,
          handleInputChange: this.handleInputChange,
          updateAccountCall: this.updateAccountCall,
          updateSeasonCall: this.updateSeasonCall,
          selectAccount: this.selectAccount,
          selectSeason: this.selectSeason,
          getGames: this.getGames,
          handleRankChange: this.handleRankChange,
          handleGameSubmit: this.handleGameSubmit,
          repackageData: this.repackageData
         
        }
      } > {
        this.props.children
      } </MyContext.Provider>
    )
  }
}
export const Consumer = MyContext.Consumer;