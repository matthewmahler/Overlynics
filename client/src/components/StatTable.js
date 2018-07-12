import React, { Component } from "react";
import { Consumer } from "../Context";

class StatTable extends Component {




  
  render() {

    
     
      
        

    return (
      <Consumer>
        {context => {

           

          return (
            <div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>{context.state.currentAccountName}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                <ul>
           {   Object.entries(context.state.currentStats.quickplay.global).map((stat, key) => {
              return <li>{stat[0]}:{stat[1]}</li>
            }) }
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default StatTable;
