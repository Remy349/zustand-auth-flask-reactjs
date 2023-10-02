import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'
import { useAuthStore } from '@/store/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const setToken = useAuthStore((state) => state.setToken)
  const isAuth = useAuthStore((state) => state.isAuth)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios
      .post('http://localhost:5000/api/auth/login', {
        username,
        password,
      })
      .then((res) => {
        const token = res.data.access_token
        setToken(token)

        navigate('/profile')
      })
      .catch((error) => {
        const message = error.response.data.message
        setErrorMessage(message)
      })
  }

  useEffect(() => {
    if (isAuth) navigate('/profile')
  }, [isAuth, navigate])

  return (
    <section className='pt-16 flex justify-center flex-col items-center'>
      {errorMessage && (
        <Alert className='mb-8 w-[500px]' variant='destructive'>
          <AlertCircle className='w-4 h-4 mr-2' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <Card className='w-[500px]'>
        <CardHeader>
          <CardTitle className='mb-2'>Login</CardTitle>
          <CardDescription>
            Enter your data to login into your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='w-full grid gap-y-6'>
            <Input
              type='text'
              autoComplete='off'
              placeholder='Username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit'>Login</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
