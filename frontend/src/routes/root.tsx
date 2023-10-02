import { Nav } from '@/components/Nav'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <Nav />
      <main className='container pt-16'>
        <Outlet />
      </main>
    </>
  )
}
