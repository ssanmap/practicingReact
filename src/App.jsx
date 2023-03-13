import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Mimain } from './Mimain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Mimain />
    </div>
  )
}

export default App
