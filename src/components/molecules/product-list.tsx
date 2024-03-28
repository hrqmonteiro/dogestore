import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'

import { Product } from '../../API'
import ProductCard from '../atoms/product-card'

type ProductListProps = {
  onAddToCart: (product: Product) => void
  products: Product[]
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  showSnack: boolean
  setShowSnack: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProductList({
  onAddToCart,
  products,
  loading,
  setLoading,
  showSnack,
  setShowSnack
}: ProductListProps) {
  return (
    <View style={styles.container}>
      {!products.length ? (
        <ActivityIndicator animating color={MD2Colors.blue500} />
      ) : (
        <>
          {products.map((product) => (
            <View key={product.id}>
              <ProductCard
                showSnack={showSnack}
                setShowSnack={setShowSnack}
                loading={loading}
                setLoading={setLoading}
                onAddToCart={() => onAddToCart(product)}
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
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: 12
  }
})
