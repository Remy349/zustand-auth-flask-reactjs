import { useAuthStore } from '@/store/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export const Nav = () => {
  const isAuth = useAuthStore((state) => state.isAuth)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className='fixed to p-0 left-0 w-full z-50 bg-white border-[1px] border-slate-300'>
      <nav className='container h-16 flex items-center justify-between'>
        <Link to='/' className='font-bold text-xl'>
          LOGO
        </Link>
        <div>
          <ul className='flex items-center gap-x-8'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {isAuth ? (
              <li>
                <Button onClick={handleClick}>Logout</Button>
              </li>
            ) : (
              <>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
