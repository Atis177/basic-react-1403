import { FILTER_DATE_ARTICLE, FILTER_SELECT_ARTICLE } from '../constants'

export default (filtersState = { dateRange: { from: null, to: null }, titles: [] }, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_DATE_ARTICLE:
      return Object.assign({}, filtersState, {
        dateRange: payload
      })
    case FILTER_SELECT_ARTICLE:
      return Object.assign({}, filtersState, {
        titles: payload
      })

    default:
      return filtersState
  }
}
