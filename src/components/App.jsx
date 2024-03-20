import { useState } from 'react'
import '../stylesheets/App.css'
import ShowSearch from './ShowSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowSearch />
    </>
  )
}

export default App
