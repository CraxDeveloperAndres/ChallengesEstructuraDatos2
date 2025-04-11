import { useState } from 'react'
import './App.css'
import CounterApp from './Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterApp defaultValue={10} />
    </>
  )
}

export default App
