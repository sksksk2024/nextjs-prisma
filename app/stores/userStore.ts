'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserStore = {
  userId: number | null;
  username: string;
  setUserId: (id: number) => void;
  setUsername: (name: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userId: 2,
      username: '',
      setUserId: (id) => set({ userId: id }),
      setUsername: (name) => set({ username: name }),
    }),
    {
      name: 'user-storage',
    }
  )
);
