import { useState, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import Router from '@/router/index'

function App () {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}

export default App
