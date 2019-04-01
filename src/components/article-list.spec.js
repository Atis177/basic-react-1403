import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'

describe('ArticleList', () => {
  it('should render a list', () => {
    const container = shallow(<ArticleList articles={articles} toggleOpenItem={() => {}} />)

    expect(container.find('.test--article-list__item').length).toBe(articles.length)
  })

  it('should render all articles closed', () => {
    const container = render(<DecoratedArticleList articles={articles} />)

    expect(container.find('.test--article__body').length).toBe(0)
  })

  it('should open article on click', () => {
    const container = mount(<DecoratedArticleList articles={articles} />)

    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--article__body').length).toBe(1)
  })

  it('should fetch all articles', () => {
    const fn = jest.fn()
    mount(<ArticleList articles={[]} fetchAll={fn} />)

    expect(fn.mock.calls.length).toBe(1)
  })
})
