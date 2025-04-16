import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GiPaintBrush } from 'react-icons/gi'

const InteriorStyleSelector = ({ onStyleChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('modern')

  const handleChange = (e) => {
    const value = e.target.value
    setSelectedStyle(value)
    onStyleChange(value)
  }

  return (
    <motion.div
      className="mb-6 bg-gray-800 p-4 rounded-xl border border-cyan-600 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2">
        <GiPaintBrush className="text-cyan-400 text-xl mr-2" />
        <label className="text-lg font-semibold text-cyan-300">Select Interior Style:</label>
      </div>
      <select
        value={selectedStyle}
        onChange={handleChange}
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
        <option value="minimalist">Minimalist</option>
        <option value="luxury">Luxury</option>
      </select>
    </motion.div>
  )
}

export default InteriorStyleSelector