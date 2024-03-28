import { Product } from '../API'

export type CartItem = {
  id: string
  quantity: number
}

export interface ExtendedProduct extends Product {
  quantity: number
}

export function cartQuantity(cartItems: CartItem[]): number {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0)
}

export function calculateTotalPrice(products: ExtendedProduct[]): number {
  return products.reduce((total: number, product: ExtendedProduct) => {
    return total + product.price * product.quantity
  }, 0)
}

export function cleanCartAndProducts(
  setCart: (cart: CartItem[]) => void,
  setProducts: (products: ExtendedProduct[]) => void
) {
  setCart([])
  setProducts([])
}
