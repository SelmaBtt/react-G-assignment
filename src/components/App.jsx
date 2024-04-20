import { useState } from 'react'
import '../stylesheets/App.css'
import FetchAPI from './FetchAPI'
import OnClickContextProvider from '../context/OnClickContextProvider'
import '../stylesheets/main.css'
import epicMusic from '../../assets/backgroundSound.mp3';

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
