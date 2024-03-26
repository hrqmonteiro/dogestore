import { NavigationContainer } from '@react-navigation/native'
import { Amplify } from 'aws-amplify'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'

import amplifyconfig from './src/amplifyconfiguration.json'
import Router from './src/components/router/main'

Amplify.configure(amplifyconfig)

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Router />
        <StatusBar style='auto' />
      </NavigationContainer>
    </PaperProvider>
  )
}
