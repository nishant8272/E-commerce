import './App.css'
import AdminForm from './component/AdminForm'
import Authorize from './component/Authorize'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
<<<<<<< HEAD
<<<<<<< Updated upstream
    <>
      {/* <Authorize/> */}
      <Home/>
    </>
=======
    <div>
      <Routes>
        <Route path='/register' element={<Authorize />} />
        <Route path='/AdminForm' element={<AdminForm />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
>>>>>>> Stashed changes
=======
    <div>
      <Routes>
        <Route path='/register' element={<Authorize />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
>>>>>>> main
  )
}

export default App
