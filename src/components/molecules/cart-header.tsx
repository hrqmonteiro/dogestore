import { NavigationProp } from '@react-navigation/native'
import { Button, MD2Colors, Text } from 'react-native-paper'

type CartHeaderProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function CartHeader({ navigation }: CartHeaderProps) {
  return (
    <>
      <Text variant='displaySmall'>Não há itens no seu carrinho!</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        style={{ marginVertical: 30 }}
        mode='text'
        textColor={MD2Colors.blue500}
      >
        Clique para voltar ao catálogo.
      </Button>
    </>
  )
}
