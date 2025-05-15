import './App.css'
import Authorize from './component/Authorize'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Authorize />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
