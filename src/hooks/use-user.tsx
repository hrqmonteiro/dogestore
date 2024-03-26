import { useEffect } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'
import { useAtom } from 'jotai/react'

import { userAtom } from '../store/atoms'

type SignInDetails = {
  authFlowType: string
  loginId: string
}

type User = {
  username?: string
  userId?: string
  signInDetails?: SignInDetails
}

export default function useUser() {
  const [user, setUser] = useAtom<User>(userAtom)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = (await getCurrentUser()) as User
        if (currentUser) {
          setUser(currentUser)
        }
      } catch (error) {
        setUser({})
      }
    }

    fetchUser()
  }, [user])

  return user
}
