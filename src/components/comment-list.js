import React from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'

function CommentList({ comments, articleId }) {
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {text}
      </button>
      {getBody({ comments, isOpen, articleId })}
    </div>
  )
}

function getBody({ comments, isOpen, articleId }) {
  if (!isOpen) return null

  const body =
    comments && comments.length ? (
      <ul>
        {comments.map((id) => (
          <li key={id} className="test--comment-list__item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">No comments yet</h3>
    )

  return (
    <div className="test--comment-list__body">
      {body}
      <CommentForm articleId={articleId} />
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array,
  articleId: PropTypes.string
}

/*
CommentList.defaultProps = {
  comments: [],
  defaultOpen: true
}
*/

export default CommentList
