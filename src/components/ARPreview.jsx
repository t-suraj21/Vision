import React from 'react'
import { motion } from 'framer-motion'
import { FaVrCardboard } from 'react-icons/fa'

const ARPreview = ({ modelUrl }) => {
  return (
    <div className="mb-10 p-6 bg-gray-800 rounded-xl shadow-lg border border-cyan-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <FaVrCardboard className="text-cyan-400 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-cyan-300">AR Preview</h2>
        </div>

        {modelUrl ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-green-300 text-lg"
          >
            AR mode will launch with the following model:
            <div className="bg-gray-700 p-2 rounded mt-2 text-sm break-all">
              {modelUrl}
            </div>
            <p className="mt-2 text-sm text-gray-400 italic">
              * AR support will be added using WebXR / AR.js
            </p>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-base"
          >
            No model loaded for AR preview. Please generate a 3D model first.
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default ARPreview