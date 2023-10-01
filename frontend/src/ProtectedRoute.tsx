import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  isAllowed: boolean
}

export const ProtectedRoute = ({ children, isAllowed }: Props) => {
  if (!isAllowed) return <Navigate to='/login' />

  return <>{children}</>
}
