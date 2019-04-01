import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const updatedState = { ...articlesState }
      delete updatedState[payload.id]
      return updatedState

    case CREATE_COMMENT:
      const { comment, articleId } = payload
      const updatedArticleState = { ...articlesState }
      const updatedArticle = { ...updatedArticleState[articleId] }
      updatedArticle.comments.push(comment.id)
      updatedArticleState[articleId] = updatedArticle

      return updatedArticleState

    default:
      return articlesState
  }
}
