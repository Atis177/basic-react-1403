import React, { Component } from 'react'

class ArticleListOld extends Component {
  constructor(...args) {
    super(...args)
  }

  /*
    componentWillMount() {
    }
*/

  componentDidMount() {}

  /*
    componentWillReceiveProps(nextProps, nextContext) {
    }
*/

  static getDerivedStateFromProps(props, state) {
    return {}
  }
  /*
    componentWillUpdate(nextProps, nextState, nextContext) {
    }
*/

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}

  render() {
    return <div />
  }
}

export default ArticleListOld
