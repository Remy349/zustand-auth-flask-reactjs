import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: string
  isAuth: boolean
}

type Action = {
  setToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: '',
      isAuth: false,
      setToken: (token: string) => set(() => ({ token, isAuth: true })),
      logout: () => {
        set({ token: '', isAuth: false })
      },
    }),
    { name: 'accessToken' },
  ),
)
