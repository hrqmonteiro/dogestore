import { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { signUp } from 'aws-amplify/auth'
import { Alert } from 'react-native'
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper'

import Container from '../atoms/container'
import Input from '../atoms/input'
import AuthFooter from '../molecules/auth-footer'
import AuthHeading from '../molecules/auth-heading'

type SignOutScreenProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function SignOutScreen({ navigation }: SignOutScreenProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const disabledButton = username === '' || password === ''

  type SignUpParameters = {
    username: string
    password: string
    email: string
  }

  async function handleSignUp({ username, password, email }: SignUpParameters) {
    try {
      setIsLoading(true)
      const { nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email
          },

          autoSignIn: true
        }
      })

      if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        setIsLoading(false)
        navigation.navigate('Confirm')
      }
    } catch (err) {
      setIsLoading(false)
      if (
        err instanceof Error &&
        err.message.includes('An account with the given email already exists.')
      ) {
        Alert.alert(
          'Erro:',
          'O email informado já está cadastrado. Confirme a conta ou logue.',
          [
            {
              text: 'Confirmar a conta',
              onPress: () => navigation.navigate('Confirm')
            },
            { text: 'OK', style: 'default' }
          ]
        )
      } else {
        Alert.alert('Erro:', `${err}`)
      }
    }
  }

  return (
    <Container>
      <AuthHeading heading='Cadastre-se' />

      <Input
        label='Email'
        onChangeText={(value) => setUsername(value)}
        placeholder='Digite seu email...'
        secureTextEntry={false}
        value={username}
      />

      <Input
        label='Senha'
        onChangeText={(value) => setPassword(value)}
        placeholder='Digite sua senha...'
        secureTextEntry={true}
        value={password}
      />

      <Button
        disabled={disabledButton}
        mode='contained'
        onPress={() => handleSignUp({ username, password, email: username })}
      >
        {isLoading ? (
          <ActivityIndicator animating color={MD2Colors.white} />
        ) : (
          'Cadastrar'
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
