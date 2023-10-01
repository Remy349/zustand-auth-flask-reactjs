import axios from 'axios'
import React from 'react'
import { useAuthStore } from './store/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const setToken = useAuthStore((state) => state.setToken)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    const resLogin = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password,
    })

    setToken(resLogin.data.access_token)

    navigate('/profile')

    // const resProfile = await axios.get(
    //   'http://localhost:5000/api/auth/profile',
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    // )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Username' autoComplete='off' required />
      <input type='password' placeholder='Password' required />
      <button type='submit'>Login</button>
    </form>
  )
}
