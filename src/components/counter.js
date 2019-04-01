import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { increment } from '../ac'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
    handleIncrement: PropTypes.func
  }

  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={this.props.handleIncrement}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  count: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}
// handleIncrement = (...args) => dispatch(increment(...args))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
