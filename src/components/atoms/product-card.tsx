import { useState } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { Card, Text } from 'react-native-paper'

import ProductDialog from '../molecules/product-dialog'

type ProductCardProps = {
  source: string | undefined
  subtitle: string
  text: string
  title: string
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  onAddToCart: (e: GestureResponderEvent) => void
  showSnack: boolean
  setShowSnack: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProductCard({
  source,
  subtitle,
  text,
  title,
  onAddToCart,
  loading,
  setLoading,
  showSnack,
  setShowSnack
}: ProductCardProps) {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <>
      <ProductDialog
        setLoading={setLoading}
        loading={loading}
        visible={visible}
        setVisible={setVisible}
        showSnack={showSnack}
        setShowSnack={setShowSnack}
        source={source}
        title={title}
        text={text}
        subtitle={subtitle}
        onPress={() => setVisible(false)}
        onAddToCart={onAddToCart}
      />

      <Card mode='outlined' onPress={() => setVisible(true)}>
        <Card.Cover source={{ uri: source }} />
        <Card.Title
          titleStyle={{ fontWeight: '700' }}
          title={title}
          subtitle={subtitle}
          subtitleStyle={{ fontWeight: '400' }}
        />
        <Card.Content>
          <Text>{text}</Text>
        </Card.Content>
      </Card>
    </>
  )
}
