import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: string
}

type Action = {
  setToken: (token: string) => void
}

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: '',
      setToken: (token: string) => set(() => ({ token })),
    }),
    { name: 'accessToken' },
  ),
)
