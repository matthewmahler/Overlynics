import axios from "axios";

export default {
  /////////
  //OWApi//
  /////////
  owapiCall: function (query) {
    return axios.get("/api/owapi", {
      params: query
    })
  },

 

  /////////  
  //Users//
  /////////
  userSave: function (userInfo) {
    return axios.post("/api/users", userInfo)
  },

  userRetrieve: function (email) {
    return axios.get(`/api/users/${email}`)
  },

  userDelete: function (id) {
    return axios.delete(`/api/users/${id}`)
  },

  ////////////  
  //accounts//
  ////////////
  accountSave: function (accountInfo) {
    return axios.post("/api/accounts", accountInfo)
  },

  accountRetrieve: function () {
    return axios.get("/api/accounts")
  },

  accountDelete: function (id) {
    return axios.delete(`/api/accounts/${id}`)
  },

  //////////// 
  //sessions//
  ////////////
  sessionSave: function (sessionInfo) {
    return axios.post("/api/sessions", sessionInfo)
  },

  sessionRetrieve: function () {
    return axios.get("/api/sessions")
  },

  sessionDelete: function (id) {
    return axios.delete(`/api/sessions/${id}`)
  },

  /////////  
  //games//
  /////////
  gameSave: function (gameInfo) {
    return axios.post("/api/games", gameInfo)
  },

  gameRetrieve: function (currentAccount, currentSeason) {
    return axios.get(`/api/games/${currentAccount}/${currentSeason}`)
  },

  gameDelete: function (id) {
    return axios.delete(`/api/games/${id}`)
  },


  
  seasonRetrieve: function () {
    return axios.get("/api/seasons")
  },
}