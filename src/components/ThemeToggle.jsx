import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

// Theme toggle component with smooth animations
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </motion.button>
  )
}

export default ThemeToggle
