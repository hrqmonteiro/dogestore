import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAtom } from 'jotai/react'
import Icon from 'react-native-vector-icons/Feather'

import { authenticatedAtom } from '../../store/atoms'
import AccountScreen from '../screens/account'
import CartScreen from '../screens/cart'
import ConfirmSignUpScreen from '../screens/confirm'
import HomeScreen from '../screens/home'
import SignInScreen from '../screens/signin'
import SignUpScreen from '../screens/signup'

const Tab = createBottomTabNavigator()

export default function Router() {
  const [authenticated] = useAtom(authenticatedAtom)

  let tabs = [
    {
      component: SignInScreen,
      icon: 'user',
      name: 'Login'
    },
    {
      component: SignUpScreen,
      icon: 'user',
      name: 'Create'
    },
    {
      component: ConfirmSignUpScreen,
      icon: 'user',
      name: 'Confirm'
    },
    {
      component: HomeScreen,
      icon: 'home',
      name: 'Home'
    },
    {
      component: CartScreen,
      icon: 'shopping-cart',
      name: 'Carrinho'
    },
    {
      component: AccountScreen,
      icon: 'user',
      name: 'Conta'
    }
  ]

  if (authenticated) {
    tabs = tabs.filter(
      (item) =>
        item.name !== 'Login' &&
        item.name !== 'Create' &&
        item.name !== 'Confirm'
    )
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display:
            route.name === 'Login' ||
            route.name === 'Create' ||
            route.name === 'Confirm'
              ? 'none'
              : 'flex',
          height:
            route.name === 'Login' ||
            route.name === 'Create' ||
            route.name === 'Confirm'
              ? 0
              : 50
        }
      })}
    >
      {tabs.map(({ component, icon, name }, key: number) => (
        <Tab.Screen
          component={component}
          key={key + 'screen ' + name}
          options={{
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '500'
            },
            tabBarIcon: ({ color }) => (
              <Icon color={color} name={icon} size={22} />
            )
          }}
          name={name}
        />
      ))}
    </Tab.Navigator>
  )
}
