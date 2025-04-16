import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GiStonePath } from 'react-icons/gi'

const TextureSelector = ({ onTextureChange }) => {
  const [selected, setSelected] = useState('wood')

  const handleChange = (e) => {
    setSelected(e.target.value)
    onTextureChange(e.target.value)
  }

  return (
    <motion.div
      className="mb-6 bg-gray-800 p-4 rounded-xl border border-cyan-600 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2">
        <GiStonePath className="text-cyan-400 text-xl mr-2" />
        <label className="text-lg font-semibold text-cyan-300">Choose Material/Texture:</label>
      </div>
      <select
        value={selected}
        onChange={handleChange}
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="wood">Wood</option>
        <option value="glass">Glass</option>
        <option value="brick">Brick</option>
        <option value="metal">Metal</option>
      </select>
    </motion.div>
  )
}

export default TextureSelector