export type CartItem = {
  id: string
  quantity: number
}

export function cartQuantity(cartItems: CartItem[]): number {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0)
}
