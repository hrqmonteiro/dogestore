import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Product } from '../../API'
import ProductCard from '../atoms/product-card'
import Sheet from '../atoms/sheet'

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  const [selectedProductTitle, setSelectedProductTitle] = useState<
    string | null
  >(null)

  const openSheetWithText = (title: string) => {
    setSelectedProductTitle(title)
  }

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
            onPress={() => openSheetWithText(product.name)}
          />
        </View>
      ))}
      {selectedProductTitle && <Sheet title={selectedProductTitle} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: 12
  }
})
