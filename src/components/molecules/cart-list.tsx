import { StyleSheet, View } from 'react-native'

import { ExtendedProduct } from '../../utils/cart'
import CartProduct from '../atoms/cart-product'

type CartListProps = {
  decreaseQuantity: (id: string) => void
  increaseQuantity: (id: string) => void
  products: ExtendedProduct[]
  removeFromCart: (id: string) => void
}

export default function CartList({
  decreaseQuantity,
  increaseQuantity,
  products,
  removeFromCart
}: CartListProps) {
  return (
    <View style={styles.container}>
      {products.map((product) => (
        <View key={product.id}>
          <CartProduct
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            product={product}
            removeFromCart={removeFromCart}
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  }
})
