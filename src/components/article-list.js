import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchAll: PropTypes.func,
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

  filterArticles = () => {
    const {
      articles,
      filters: {
        titles,
        dateRange: { from, to }
      }
    } = this.props
    const selectedArticleValues = titles.map((title) => title.value)

    let filteredArticle =
      titles && titles.length > 0
        ? articles.filter((article) => selectedArticleValues.includes(article.id))
        : articles
    filteredArticle =
      from && to
        ? filteredArticle.filter(
            (article) =>
              new Date(article.date) >= new Date(from) && new Date(article.date) <= new Date(to)
          )
        : filteredArticle
    return filteredArticle
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>

    const { toggleOpenItem, openItemId } = this.props
    let filteredArticle = this.filterArticles()
    const articleItems = filteredArticle.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={article.id === openItemId}
          onBtnClick={toggleOpenItem(article.id)}
        />
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(accordion(ArticleList))
