import { useNavigate } from 'react-router-dom'
import { useAuthStore } from './store/auth'

export const Profile = () => {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => {
          logout()
          navigate('/login')
        }}
      >
        Logout
      </button>
    </div>
  )
}
