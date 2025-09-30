import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VideoCard from '../../components/VideoCard/VideoCard'
import ViewToggle from '../../components/ViewToggle/ViewToggle'
import { videosData } from '../../data/videos'

// Dashboard page showing video library with grid/list toggle
const Dashboard = () => {
  const [viewMode, setViewMode] = useState('grid')

  const handleViewChange = (mode) => {
    setViewMode(mode)
  }

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-header">
        <motion.h1 
          className="dashboard-title"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Video Library
        </motion.h1>
        
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ViewToggle viewMode={viewMode} onViewChange={handleViewChange} />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          className={viewMode === 'grid' ? 'videos-grid' : 'videos-list'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {videosData.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <VideoCard video={video} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Dashboard
