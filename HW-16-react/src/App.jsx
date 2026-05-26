import { useState } from 'react'
import './App.css'
import Statistics from './statistics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
   <Statistics/>
    </>
  )
}

export default App
