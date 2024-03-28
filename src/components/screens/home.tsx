import useProducts from '../../hooks/use-products'
import Container from '../atoms/container'
import ProductList from '../molecules/product-list'

export default function HomeScreen() {
  const products = useProducts()

  return <ProductList products={products} />
}
