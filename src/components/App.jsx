import { useState } from 'react'
import '../stylesheets/App.css'
import FetchAPI from './FetchAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAPI />
    </>
  )
}

export default App
