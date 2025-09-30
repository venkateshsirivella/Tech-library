import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Video card component with hover animations
const VideoCard = ({ video, viewMode }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/video/${video.id}`)
  }

  return (
    <motion.div
      className={`video-card ${viewMode === 'list' ? 'list-view' : ''}`}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: viewMode === 'grid' ? 1.02 : 1.01,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="video-thumbnail"
        loading="lazy"
      />
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">
          {video.description.substring(0, 120)}...
        </p>
      </div>
    </motion.div>
  )
}

export default VideoCard
