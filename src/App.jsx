import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Mimain } from './Mimain'
import ButtonState from './components/ButtonState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Mimain />
      <ButtonState />
    </div>
  )
}

export default App
