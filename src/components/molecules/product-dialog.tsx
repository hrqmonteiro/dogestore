import { useEffect } from 'react'
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  type GestureResponderEvent
} from 'react-native'
import {
  ActivityIndicator,
  Button,
  MD2Colors,
  Snackbar,
  Text
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

import Dialog from '../atoms/dialog'

type ProductDialogProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  showSnack: boolean
  setShowSnack: React.Dispatch<React.SetStateAction<boolean>>
  source: string | undefined
  title: string
  text: string
  subtitle: string
  onPress: () => void
  onAddToCart: (e: GestureResponderEvent) => void
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProductDialog({
  visible,
  setVisible,
  showSnack,
  setShowSnack,
  source,
  title,
  text,
  subtitle,
  onPress,
  onAddToCart,
  loading,
  setLoading
}: ProductDialogProps) {
  return (
    <Dialog visible={visible} setVisible={setVisible}>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        <Icon name='arrow-left' size={30} />
      </Pressable>

      <Image
        style={styles.imageContainer}
        source={{
          uri: source
        }}
      />

      <Text
        variant='displaySmall'
        style={{ fontWeight: '700', marginBottom: 10 }}
      >
        {title}
      </Text>

      <Text variant='headlineSmall' style={{ marginBottom: 30 }}>
        {text}
      </Text>

      <Text
        variant='titleLarge'
        style={{ fontWeight: '700', marginBottom: 50 }}
      >
        {subtitle}
      </Text>

      <Button
        buttonColor={MD2Colors.blue500}
        textColor={MD2Colors.white}
        onPress={onAddToCart}
        style={{ width: '100%' }}
        mode='contained'
      >
        <Text style={{ color: MD2Colors.white }}>
          {loading ? (
            <ActivityIndicator animating color={MD2Colors.white} />
          ) : (
            'Adicionar ao carrinho'
          )}
        </Text>
      </Button>

      <View style={styles.snackContainer}>
        <Snackbar
          visible={showSnack}
          onDismiss={() => setShowSnack(false)}
          action={{
            textColor: MD2Colors.blue500,
            label: 'Ok',
            onPress: () => setShowSnack(false)
          }}
        >
          Adicionado com sucesso!
        </Snackbar>
      </View>
    </Dialog>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: 'red',
    marginBottom: 20
  },
  snackContainer: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
    position: 'relative',
    top: 70
  }
})
