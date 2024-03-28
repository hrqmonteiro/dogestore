import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import { fetchAuthSession } from 'aws-amplify/auth'

import { Product } from '../API'
import * as queries from '../graphql/queries'

export default function useProducts() {
  const [token, setToken] = useState<string | undefined>('')
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getUser() {
      const session = await fetchAuthSession()
      setToken(session.tokens?.accessToken.toString())
    }

    getUser()
  }, [])

  const client = generateClient({
    authMode: 'userPool',
    authToken: token
  })

  async function getProducts() {
    try {
      const listProducts = await client.graphql({
        query: queries.listProducts
      })

      setProducts(listProducts.data.listProducts.items as [])
    } catch (err) {
      console.error(`Error listing products: `, err)
    }
  }

  async function getProductById(id: string) {
    try {
      const product = await client.graphql({
        query: queries.getProduct,
        variables: {
          id
        }
      })

      return product
    } catch (err) {
      console.error(`Error getting product: `, err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [token])

  return { products, getProductById }
}
