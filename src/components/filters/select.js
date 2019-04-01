import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { selectOptionSelector, selectedSelector } from '../../selectors'

function SelectFilter({ articles, selected, changeSelection }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={changeSelection} isMulti />
}

export default connect(
  (state) => ({
    selected: selectedSelector(state),
    articles: selectOptionSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
