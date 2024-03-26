import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import { clearAll, getItem, removeItem, setItem } from './storage'

const atomWithMMKV = <T>(key: string, initialValue: T) =>
  atomWithStorage<T>(
    key,
    initialValue,
    createJSONStorage<T>(() => ({
      getItem,
      setItem,
      removeItem,
      clearAll
    }))
  )

export const authenticatedAtom = atomWithMMKV('authenticated', false)
export const userAtom = atomWithMMKV('user', {})
