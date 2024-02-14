import { Toaster } from "react-hot-toast"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/login'
import { Signup } from './pages/signup/Signup'
function App() {
  

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        
        <Routes>
        <Route path='/login' element={ <Login />} />
				<Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
