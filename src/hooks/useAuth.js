import { useState, useEffect } from 'react'

// Custom hook for authentication management
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app load
    const authStatus = localStorage.getItem('isAuthenticated')
    setIsAuthenticated(authStatus === 'true')
    setLoading(false)
  }, [])

  const login = (username, password) => {
    // Simple authentication check
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true)
      localStorage.setItem('isAuthenticated', 'true')
      return { success: true, message: 'Login Successful' }
    } else {
      return { success: false, message: 'Incorrect Username or Password' }
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  return {
    isAuthenticated,
    loading,
    login,
    logout
  }
}
