import { DELETE_ARTICLE, INCREMENT, FILTER_DATE_ARTICLE, FILTER_SELECT_ARTICLE } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const filterDateArticle = (dateRange) => ({
  type: FILTER_DATE_ARTICLE,
  payload: dateRange
})

export const filterSelectArticle = (payload) => ({
  type: FILTER_SELECT_ARTICLE,
  payload
})
