import Container from '../atoms/container'
import Heading from '../atoms/heading'
import ProductsHome from '../organisms/products-home'

export default function HomeScreen() {
  return (
    <Container>
      <Heading
        heading='DogeStore'
        subheading='Seja bem vindo à melhor loja de cafés.'
        tripleheading='Aqui você encontrará a melhor variedade e o menor preço.'
      />
      <ProductsHome />
    </Container>
  )
}
