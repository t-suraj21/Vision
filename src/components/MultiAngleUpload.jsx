import React from 'react'
import { motion } from 'framer-motion'
import { BiImageAdd } from 'react-icons/bi'

const MultiAngleUpload = ({ onImagesUpload }) => {
  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageURLs = files.map(file => URL.createObjectURL(file))
    onImagesUpload(imageURLs)
  }

  return (
    <motion.div
      className="mb-6 bg-gray-800 p-4 rounded-xl border border-cyan-600 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2">
        <BiImageAdd className="text-cyan-400 text-xl mr-2" />
        <label className="text-lg font-semibold text-cyan-300">Upload Images (Multiple Angles):</label>
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white file:bg-cyan-600 file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:cursor-pointer hover:file:bg-cyan-700"
      />
      <p className="mt-2 text-sm text-gray-400">Upload multiple images (front, top, side) for better 3D accuracy.</p>
    </motion.div>
  )
}

export default MultiAngleUpload
