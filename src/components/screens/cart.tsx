import { useEffect, useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { useAtom } from 'jotai'
import { Button, MD2Colors, Text } from 'react-native-paper'

import useProducts from '../../hooks/use-products'
import { cartAtom } from '../../store/atoms'
import { cleanCartAndProducts, ExtendedProduct } from '../../utils/cart'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Snack from '../atoms/snack'
import CartFooter from '../molecules/cart-footer'
import CartHeader from '../molecules/cart-header'
import CartList from '../molecules/cart-list'

type CartScreenProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function CartScreen({ navigation }: CartScreenProps) {
  const [cart, setCart] = useAtom(cartAtom)
  const { getProductById } = useProducts()
  const [products, setProducts] = useState<ExtendedProduct[]>([])
  const [showSnack, setShowSnack] = useState<boolean>(false)

  const fetchProducts = async () => {
    const updatedProducts = []

    for (const item of cart) {
      try {
        const res = await getProductById(item.id)
        const product = res?.data.getProduct

        if (product) {
          const updatedProduct = { ...product, quantity: item.quantity }
          updatedProducts.push(updatedProduct)
        }

        setProducts(updatedProducts)
      } catch (err) {
        console.error(`Error fetching the products: `, err)
      }
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })

    const filteredCart = updatedCart.filter((item) => item.quantity > 0)
    setCart(filteredCart)

    if (filteredCart.length < cart.length) {
      setShowSnack(true)
    }

    const updatedProducts = products.filter((product) => {
      const cartItem = updatedCart.find((item) => item.id === product.id)
      return cartItem && cartItem.quantity > 0
    })
    setProducts(updatedProducts)
  }

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)

    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts(updatedProducts)
    setShowSnack(true)
  }

  useEffect(() => {
    if (cart.length > 0) {
      fetchProducts()
    } else {
      setProducts([])
    }
  }, [cart])

  return (
    <>
      <Container>
        <Heading heading='Carrinho' />

        {!products.length ? (
          <CartHeader navigation={navigation} />
        ) : (
          <>
            <CartList
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              products={products}
              removeFromCart={removeFromCart}
            />

            <CartFooter products={products} cart={cart} />
          </>
        )}
      </Container>

      <Button
        onPress={() => cleanCartAndProducts(setCart, setProducts)}
        mode='contained'
        buttonColor={MD2Colors.blue500}
        style={{ marginVertical: 30, padding: 10, marginHorizontal: 6 }}
      >
        <Text
          style={{ color: MD2Colors.white, fontWeight: '700', fontSize: 20 }}
        >
          Comprar
        </Text>
      </Button>

      <Snack
        visible={showSnack}
        setVisible={setShowSnack}
        text='Item removido do carrinho!'
        label='Ok'
      />
    </>
  )
}
