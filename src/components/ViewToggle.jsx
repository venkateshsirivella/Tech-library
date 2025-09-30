import React from 'react'
import { motion } from 'framer-motion'

// View toggle component for grid/list layout switching
const ViewToggle = ({ viewMode, onViewChange }) => {
  return (
    <div className="view-toggle">
      <motion.button
        className={viewMode === 'grid' ? 'active' : ''}
        onClick={() => onViewChange('grid')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>⊞</span>
        Grid
      </motion.button>
      <motion.button
        className={viewMode === 'list' ? 'active' : ''}
        onClick={() => onViewChange('list')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>☰</span>
        List
      </motion.button>
    </div>
  )
}

export default ViewToggle
