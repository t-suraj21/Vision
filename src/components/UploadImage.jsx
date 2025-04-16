import React from 'react'
import { motion } from 'framer-motion'
import { FiUploadCloud } from 'react-icons/fi'

const UploadImage = ({ onUpload }) => {
  return (
    <motion.div
      className="mb-6 bg-gray-800 p-4 rounded-xl border border-cyan-600 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2">
        <FiUploadCloud className="text-cyan-400 text-xl mr-2" />
        <label className="text-lg font-semibold text-cyan-300">Upload 2D Image:</label>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={onUpload}
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white file:bg-cyan-600 file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:cursor-pointer hover:file:bg-cyan-700"
      />
      <p className="mt-2 text-sm text-gray-400">Supports JPG, PNG, and WebP. Max size: 10MB.</p>
    </motion.div>
  )
}

export default UploadImage