import React from 'react'
import { motion } from 'framer-motion'
import { LuShare2 } from 'react-icons/lu'

const ShareModel = ({ modelUrl }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(modelUrl)
    alert('✅ Model link copied to clipboard!')
  }

  return (
    <motion.div
      className="mt-8 flex items-center justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <button
        onClick={handleShare}
        className="flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-lg text-white hover:bg-indigo-700 transition-all shadow-md"
      >
        <LuShare2 className="text-lg" />
        Share 3D Model Link
      </button>
    </motion.div>
  )
}

export default ShareModel
