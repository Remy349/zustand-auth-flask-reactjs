import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/'>LOGO</Link>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
            <li>
              <Link to='/Profile'>Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
