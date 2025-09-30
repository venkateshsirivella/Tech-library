import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { videosData } from '../data/videos'

// Video detail page with embedded YouTube player
const VideoDetail = () => {
  const { id } = useParams()
  const video = videosData.find(v => v.id === id)

  if (!video) {
    return (
      <motion.div
        className="dashboard"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Video not found</h1>
        <Link to="/dashboard" className="back-button">
          ← Back to Dashboard
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="video-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="video-detail-header"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/dashboard" className="back-button">
          ← Back to Dashboard
        </Link>
      </motion.div>

      <motion.div
        className="video-player"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <iframe
          src={video.videoUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        className="video-detail-info"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1>{video.title}</h1>
        <div className="video-detail-description">
          {video.description.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default VideoDetail
