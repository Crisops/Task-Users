import { createContext, useEffect, useState } from 'react'
import { fetchAuth, verifyToken } from '../api/auth'
import { URL_API } from '../../config'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(null)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [error])

  useEffect(() => {
    const accessToken = Cookies.get()
    if (!accessToken.access_token) return setIsAuthenticated(false)

    async function fetchValidateToken () {
      try {
        const res = await verifyToken(`${URL_API}/verify`)
        if (res.message) throw res.message
        setUser(res)
        setIsAuthenticated(true)
      } catch (error) {
        setUser(false)
        setIsAuthenticated(false)
      }
    }

    fetchValidateToken()
  }, [])

  const signup = async (user) => {
    try {
      const res = await fetchAuth(`${URL_API}/register`, user)
      if (res.error) throw res.error
      setUser(res)
      setIsAuthenticated(true)
    } catch (error) {
      setError(error)
    }
  }

  const signin = async (user) => {
    try {
      const res = await fetchAuth(`${URL_API}/login`, user)
      if (res.error) throw res.error
      setUser(res)
      setIsAuthenticated(true)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, error }}>{children}</AuthContext.Provider>
  )
}
