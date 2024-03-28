import { useState } from 'react'
import { useAtom } from 'jotai'

import { Product } from '../../API'
import useProducts from '../../hooks/use-products'
import { cartAtom } from '../../store/atoms'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import ProductList from '../molecules/product-list'

export default function ProductsHome() {
  const { products } = useProducts()
  const [cart, setCart] = useAtom(cartAtom)
  const [loading, setLoading] = useState<boolean>(false)
  const [showSnack, setShowSnack] = useState<boolean>(false)

  const onAddToCart = (product: Product) => {
    setLoading(true)
    const updatedCart = [...cart]
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    )

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1
    } else {
      updatedCart.push({ id: product.id, quantity: 1 })
    }

    setCart(updatedCart)
    setLoading(false)
    setShowSnack(true)
  }

  return (
    <Container>
      <Heading
        heading='DogeStore'
        subheading='Seja bem vindo à melhor loja de cafés.'
        tripleheading='Aqui você encontrará a melhor variedade e o menor preço.'
      />
      <ProductList
        showSnack={showSnack}
        setShowSnack={setShowSnack}
        loading={loading}
        setLoading={setLoading}
        onAddToCart={onAddToCart}
        products={products}
      />
    </Container>
  )
}
