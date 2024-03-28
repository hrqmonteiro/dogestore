import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import type { CartItem } from '../utils/cart'
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
export const cartAtom = atomWithMMKV<CartItem[]>('cart', [])
