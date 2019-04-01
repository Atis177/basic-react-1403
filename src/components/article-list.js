import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { filtratedArticlesSelector } from '../selectors'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchAll: PropTypes.func,
    //from decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }

  state = {
    error: null
  }

  componentDidMount() {
    const { fetchAll } = this.props
    fetchAll && fetchAll()
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    console.log('---', 'rendering ArticleList')
    if (this.state.error) return <h2>OOooops</h2>

    const { articles, toggleOpenItem, openItemId } = this.props
    const articleItems = articles.map((id) => (
      <li key={id} className="test--article-list__item">
        <Article id={id} isOpen={id === openItemId} onBtnClick={toggleOpenItem(id)} />
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default connect((state) => {
  console.log('---', 'connect')
  return {
    articles: filtratedArticlesSelector(state)
  }
})(accordion(ArticleList))
