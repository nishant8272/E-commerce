import { useState } from 'react'
import './App.css'
import AdminForm from './component/AdminForm'
import Authorize from './component/Authorize'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Authorize />} />
        // this available for admin to add new product
        <Route path='/adminForm' element={<AdminForm />} />
        <Route path='/' element={<Landingpage />} />
      </Routes>
    </div>
  )
}

export default App
