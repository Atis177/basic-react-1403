import React from 'react'
import { mount } from 'enzyme/build'
import articles from '../fixtures'
import CommentList from './comment-list'
import CommentForm from './comment-form'

describe('CommentList', () => {
  it('should render closed comments by default', () => {
    const wrapper = mount(<CommentList comments={articles[0].comments} />)

    expect(wrapper.find('.test--comment-list__body').length).toBe(0)
  })

  it('should open comments on click', () => {
    const wrapper = mount(<CommentList comments={articles[0].comments} />)

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list__item').length).toBe(articles[0].comments.length)
  })

  it('should display an empty comments text', () => {
    const wrapper = mount(<CommentList />)

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list__empty').length).toBe(1)
  })

  it('should display a form', () => {
    const wrapper = mount(<CommentList />)

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.contains(<CommentForm />)).toBe(true)
  })
})
