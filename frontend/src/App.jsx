import { useState } from 'react'
import './App.css'
import AdminForm from './component/AdminForm'
import Authorize from './component/Authorize'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Authorize />} />
        <Route path='/AdminForm' element={<AdminForm />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
