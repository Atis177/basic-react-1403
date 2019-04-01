import React from 'react'
import { shallow } from 'enzyme'
import Article from './article'
import articles from '../fixtures'
import CommentList from './comment-list'

describe('Article', () => {
  it('should be closed by default', () => {
    const wrapper = shallow(<Article article={articles[0]} />)

    expect(wrapper.find('.test--article__body').length).toBe(0)
  })

  it('should be render a body when opened', () => {
    const wrapper = shallow(<Article article={articles[0]} isOpen />)

    expect(wrapper.find('.test--article__body').length).toBe(1)
  })

  it('should contain CommentList', () => {
    const wrapper = shallow(<Article article={articles[0]} isOpen />)

    expect(wrapper.contains(<CommentList comments={articles[0].comments} />)).toBe(true)
  })
})
