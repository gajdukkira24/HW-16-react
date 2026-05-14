import { useState } from 'react'
import './App.css'
import Statistics from './statistics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Please leave feedback</h1>
   <Statistics/>
    </>
  )
}

export default App
