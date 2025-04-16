import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authorize from './component/Authorize'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authorize/>
    </>
  )
}

export default App
