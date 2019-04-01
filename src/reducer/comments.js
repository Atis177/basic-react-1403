import {} from '../constants'
import { normalizedComments } from '../fixtures'
import { CREATE_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_COMMENT:
      const { comment } = payload
      const updatedComments = { ...comments }
      updatedComments[comment.id] = comment
      return updatedComments
    default:
      return comments
  }
}
