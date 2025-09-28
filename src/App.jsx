import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Lazy loading for better performance
const Login = React.lazy(() => import('./pages/Login/Login'))
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))
const VideoDetail = React.lazy(() => import('./pages/VideoDetail/VideoDetail'))

// Loading component with animation
const LoadingSpinner = () => (
  <motion.div 
    className="loading-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="spinner"></div>
    <p>Loading...</p>
  </motion.div>
)

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public route - Login */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes - Dashboard and Video Detail */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/video/:id" element={
              <ProtectedRoute>
                <VideoDetail />
              </ProtectedRoute>
            } />
            
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Catch all route - redirect to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
        
        {/* Toast notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'var(--card-bg)',
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)',
            },
          }}
        />
      </Layout>
    </Router>
  )
}

export default App
