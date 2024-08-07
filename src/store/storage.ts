import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export function getItem<T>(key: string): T | null {
  const value = storage.getString(key)
  return value ? JSON.parse(value) : null
}

export function setItem<T>(key: string, value: T): void {
  storage.set(key, JSON.stringify(value))
}

export function removeItem(key: string): void {
  storage.delete(key)
}

export function clearAll(): void {
  storage.clearAll()
}

export function clearMMKVAtoms(...atoms: string[]): void {
  atoms.forEach((atomKey) => {
    removeItem(atomKey)
  })
}
