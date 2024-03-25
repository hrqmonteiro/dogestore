import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

import AccountScreen from '../screens/account'
import CartScreen from '../screens/cart'
import HomeScreen from '../screens/home'

const Tab = createBottomTabNavigator()

const tabs = [
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

export default function Router() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false
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
      </NavigationContainer>
    </PaperProvider>
  )
}
