import { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth'
import { Alert } from 'react-native'
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper'

import Container from '../atoms/container'
import Input from '../atoms/input'
import AuthFooter from '../molecules/auth-footer'
import AuthHeading from '../molecules/auth-heading'

type ConfirmSignUpScreenProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function ConfirmSignUpScreen({
  navigation
}: ConfirmSignUpScreenProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [confirmationCode, setConfirmationCode] = useState<string>('')

  const disabledButton = username === '' || confirmationCode === ''

  async function handleSignUpConfirmation({
    username,
    confirmationCode
  }: ConfirmSignUpInput) {
    try {
      setIsLoading(true)
      const { nextStep } = await confirmSignUp({
        username,
        confirmationCode
      })

      if (nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN') {
        setIsLoading(false)
        navigation.navigate('Home')
      }
    } catch (err) {
      setIsLoading(false)
      if (
        err instanceof Error &&
        err.message.includes(
          'User cannot be confirmed. Current status is CONFIRMED'
        )
      ) {
        Alert.alert('Sucesso:', 'Usuário confirmado. Faça login!')
        navigation.navigate('Login')
      } else {
        Alert.alert('Erro:', `${err}`)
      }
    }
  }

  return (
    <Container>
      <AuthHeading heading='Confirmar' />

      <Input
        label='Email'
        onChangeText={(value) => setUsername(value)}
        placeholder='Digite seu email...'
        secureTextEntry={false}
        value={username}
      />
      <Input
        label='Código de confirmação'
        onChangeText={(value) => setConfirmationCode(value)}
        placeholder='Digite o código enviado ao email...'
        secureTextEntry={false}
        value={confirmationCode}
      />

      <Button
        disabled={disabledButton}
        mode='contained'
        onPress={() => handleSignUpConfirmation({ username, confirmationCode })}
      >
        {isLoading ? (
          <ActivityIndicator animating color={MD2Colors.white} />
        ) : (
          'Confirmar'
        )}
      </Button>

      <AuthFooter
        action='Entre agora!'
        heading='Já possui uma conta?'
        onPress={() => navigation.navigate('Login')}
      />
    </Container>
  )
}
