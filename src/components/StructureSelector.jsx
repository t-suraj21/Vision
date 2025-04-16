import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuBuilding } from 'react-icons/lu'

const StructureSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState('home')

  const handleChange = (e) => {
    setSelected(e.target.value)
    onSelect(e.target.value)
  }

  return (
    <motion.div
      className="mb-6 bg-gray-800 p-4 rounded-xl border border-cyan-600 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2">
        <LuBuilding className="text-cyan-400 text-xl mr-2" />
        <label className="text-lg font-semibold text-cyan-300">Select Structure Type:</label>
      </div>
      <select
        value={selected}
        onChange={handleChange}
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="home">Home</option>
        <option value="hotel">Hotel</option>
        <option value="hospital">Hospital</option>
        <option value="temple">Temple</option>
      </select>
    </motion.div>
  )
}

export default StructureSelector
