import { createContext, useState } from 'react'
import { fetchAuth } from '../api/auth'
import { URL_API } from '../../config'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(null)

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

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, error }}>{children}</AuthContext.Provider>
  )
}
