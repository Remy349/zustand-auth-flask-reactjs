import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  token: string
  isAuth: boolean
  user: {
    id: number
    username: string
  }
}

interface Action {
  setToken: (token: string) => void
  setUser: (id: number, username: string) => void
  logout: () => void
}

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      user: {
        id: 0,
        username: '',
      },
      token: '',
      isAuth: false,
      setUser: (id: number, username: string) => {
        set(() => ({
          user: {
            id: id,
            username: username,
          },
        }))
      },
      setToken: (token: string) => set({ token, isAuth: true }),
      logout: () => {
        set(() => ({
          token: '',
          isAuth: false,
          user: {
            id: 0,
            username: '',
          },
        }))
      },
    }),
    { name: 'accessToken' },
  ),
)
