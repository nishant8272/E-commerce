import { useState } from 'react'
import './App.css'
import Authorize from './component/Authorize'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Authorize/> */}
      <Home/>
    </>
  )
}

export default App
