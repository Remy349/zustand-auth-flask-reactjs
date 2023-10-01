import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import { Profile } from './Profile'
import { Nav } from './Nav'
import { ProtectedRoute } from './ProtectedRoute'
import { useAuthStore } from './store/auth'

function App() {
  const isAuth = useAuthStore((state) => state.isAuth)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute isAllowed={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
