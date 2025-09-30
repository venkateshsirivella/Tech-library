import React from 'react'
import { useLocation } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useAuth } from '../../hooks/useAuth'
import toast from 'react-hot-toast'

// Main layout component with header and theme controls
const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useAuth()
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
  }

  return (
    <div className="layout">
      {/* Header - only show on non-login pages */}
      {!isLoginPage && (
        <header className="layout-header">
          <div className="logo">Tech Library</div>
          <div className="header-controls">
            <ThemeToggle />
            {isAuthenticated && (
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </header>
      )}
      
      {/* Main content */}
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
