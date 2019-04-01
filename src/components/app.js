import React, { useState } from 'react'
import ArticleList from './article-list'
import Filters from './filters'
import Counter from './counter'

function App() {
  const [username, setUsername] = useState('Roma')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <>
      <h1>Article App</h1>
      Username:{' '}
      <input
        type="text"
        value={username}
        onChange={handleUserChange}
        style={{
          color: username.length < 5 ? 'red' : 'black'
        }}
      />
      <Counter />
      <Filters articles={[]} />
      <ArticleList />
    </>
  )
}

App.propTypes = {}

export default App
