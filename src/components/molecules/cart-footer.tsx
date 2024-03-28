import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import {
  calculateTotalPrice,
  CartItem,
  cartQuantity,
  ExtendedProduct
} from '../../utils/cart'

type CartFooter = {
  cart: CartItem[]
  products: ExtendedProduct[]
}

export default function CartFooter({ cart, products }: CartFooter) {
  const quantity = cartQuantity(cart)

  return (
    <>
      <Text
        style={{ fontWeight: '700', marginBottom: 20 }}
        variant='headlineMedium'
      >
        Detalhes da compra
      </Text>

      <View style={styles.subQuantityContainer}>
        <Text style={{ marginRight: 5 }} variant='titleMedium'>
          Quantidade de itens:
        </Text>
        <Text
          style={{ marginRight: 5, fontWeight: '700' }}
          variant='titleMedium'
        >
          {quantity}
        </Text>
      </View>
      <View style={styles.totalQuantityContainer}>
        <Text
          style={{ marginRight: 5, fontWeight: '700' }}
          variant='titleLarge'
        >
          {calculateTotalPrice(products).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  subQuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  totalQuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    marginVertical: 14
  }
})
