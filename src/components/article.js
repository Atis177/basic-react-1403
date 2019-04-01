import React from 'react'
import PropTypes from 'prop-types'
import { deleteArticle } from '../ac'
import CommentList from './comment-list'
import { connect } from 'react-redux'
import { createArticleSelector } from '../selectors'

function Article({ isOpen, article, onBtnClick, deleteArticle }) {
  const text = isOpen ? 'close' : 'open'
  return (
    <div ref={setContainerRef}>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick} className="test--article__btn">
        {text}
      </button>
      <button onClick={() => deleteArticle(article.id)}>delete me</button>
      {getBody({ isOpen, article })}
    </div>
  )
}

function setContainerRef(element) {
  //  console.log('---', element)
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return (
    <section className="test--article__body">
      {article.text}
      <CommentList comments={article.comments} articleId={article.id} />
    </section>
  )
}

Article.propTypes = {
  id: PropTypes.string.isRequired
}

const createMapStateToProps = () => {
  const articleSelector = createArticleSelector()

  return (state, ownProps) => ({
    article: articleSelector(state, ownProps)
  })
}

export default connect(
  createMapStateToProps,
  { deleteArticle }
)(Article)
