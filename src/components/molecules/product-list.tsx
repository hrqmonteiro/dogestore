import { StyleSheet, View } from 'react-native'

import { Product } from '../../API'
import ProductCard from '../atoms/product-card'

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <View style={styles.container}>
      {products.map((product) => (
        <View key={product.id}>
          <ProductCard
            source={product.image}
            subtitle={product?.price?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
            title={product.name}
            text={product.description}
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: 12
  }
})
