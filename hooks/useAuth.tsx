import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useAuth = (statusCode: number) => {
  const [isAuth, setIsAuth] = useState(true)

  const router = useRouter()

  useEffect(() => {
    if (statusCode === 401) {
      setIsAuth(false)
      router.push('/login')
    }
  }, [router, statusCode])

  return isAuth
}

export default useAuth
