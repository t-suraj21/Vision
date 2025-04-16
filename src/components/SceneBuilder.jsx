import React from 'react'
import { motion } from 'framer-motion'
import { LuLayoutDashboard } from 'react-icons/lu'

const SceneBuilder = () => {
  return (
    <motion.div
      className="p-6 bg-gray-800 rounded-xl shadow-lg border border-cyan-600 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <LuLayoutDashboard className="text-cyan-400 text-2xl mr-2" />
        <h2 className="text-2xl font-bold text-cyan-300">Scene Builder (Coming Soon)</h2>
      </div>
      <div className="w-full h-64 border-dashed border-2 border-cyan-400 rounded-lg flex items-center justify-center bg-gray-900">
        <p className="text-gray-400 italic">Drag objects here to build your custom 3D layout</p>
      </div>
    </motion.div>
  )
}

export default SceneBuilder
