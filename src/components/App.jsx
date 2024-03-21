import { useState } from 'react'
import '../stylesheets/App.css'
import FetchAPI from './FetchAPI'
import OnClickContextProvider from '../context/OnClickContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OnClickContextProvider>
        <FetchAPI />
      </OnClickContextProvider>
    </>
  )
}

export default App
