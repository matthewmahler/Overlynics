import React, {Component} from 'react'
import {Consumer} from '../Context';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';import '../../node_modules/react-vis/dist/styles/plot.scss'

class MainGraph extends Component {


  render() {

    return (
      <Consumer>
   {(context) => {
      return <div>
      <XYPlot
        width={500}
        height={500}>
        <HorizontalGridLines />
        <LineSeries
          color="red"
          data={context.state.graphData}/>
        <XAxis title="Game Number" />
        <YAxis title="Rank"/>
      </XYPlot>
      </div>
    }}
    </Consumer>
    )
  }
}
export default MainGraph