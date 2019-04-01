import { Component } from 'react'

class ToggleOpenComponent extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = (openArticleId) => () => this.setState({ openArticleId })
}

export default ToggleOpenComponent
