import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { MD2Colors, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

import { ExtendedProduct } from '../../utils/cart'

type CartProductProps = {
  decreaseQuantity: (id: string) => void
  increaseQuantity: (id: string) => void
  product: ExtendedProduct
  removeFromCart: (id: string) => void
}

export default function CartProduct({
  decreaseQuantity,
  increaseQuantity,
  product,
  removeFromCart
}: CartProductProps) {
  return (
    <View style={styles.cardContainer} key={product.id}>
      <Image
        style={styles.imageContainer}
        width={100}
        height={100}
        source={{ uri: product.image }}
      />

      <View style={styles.actionsContainer}>
        <Text
          style={{ fontWeight: '700', marginBottom: 4 }}
          variant='titleLarge'
        >
          {product.name}
        </Text>
        <Text style={{ marginBottom: 4 }} variant='titleMedium'>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => decreaseQuantity(product.id)}
              style={{ marginRight: 10 }}
            >
              <Icon name='minus-circle' size={20} color={MD2Colors.grey600} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '700' }}>{product.quantity}</Text>
            <TouchableOpacity
              onPress={() => increaseQuantity(product.id)}
              style={{ marginLeft: 10 }}
            >
              <Icon name='plus-circle' size={20} color={MD2Colors.grey600} />
            </TouchableOpacity>
          </View>
          <View style={styles.trashContainer}>
            <TouchableOpacity onPress={() => removeFromCart(product.id)}>
              <Icon name='trash-2' size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: 5,
    flexGrow: 1
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 10
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  trashContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 16
  }
})
