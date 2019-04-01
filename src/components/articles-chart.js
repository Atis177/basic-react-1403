import React, { Component } from 'react'
//import d3

class ArticlesChart extends Component {
  static propTypes = {}

  componentDidUpdate() {
    //update chart in this.container
  }

  render() {
    return <div ref={this.setChartRef} />
  }

  setChartRef = (container) => {
    this.container = container

    if (container) {
      //do some charting with d3
    } else {
      //perform cleanup
    }
  }
}

export default ArticlesChart
