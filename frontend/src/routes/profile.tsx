import { useAuthStore } from '@/store/auth'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const token = useAuthStore((state) => state.token)
  const setUser = useAuthStore((state) => state.setUser)
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const isAuth = useAuthStore((state) => state.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }

    axios
      .get('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { id, username } = res.data
        setUser(id, username)
      })
      .catch(() => {
        logout()
      })
  }, [token, isAuth])

  return (
    <section className='pt-20 flex justify-center'>
      <h1 className='font-bold text-4xl'>Welcome back, {user.username}!</h1>
    </section>
  )
}
