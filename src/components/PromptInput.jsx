import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FaWandMagicSparkles } from 'react-icons/fa6'

const PromptInput = ({ structure, style, texture, image, setModelUrl }) => {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const finalPrompt = `${style} ${structure} with ${texture} material. ${prompt}`
      const res = await axios.post('http://localhost:5000/generate', {
        prompt: finalPrompt
      })
      setModelUrl(res.data.modelUrl)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="mb-6 bg-gray-800 p-4 rounded-xl border border-blue-600 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2">
        <FaWandMagicSparkles className="text-yellow-300 text-xl mr-2" />
        <label className="text-lg font-semibold text-cyan-300">Describe Your Structure:</label>
      </div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. glass temple with waterfall entrance"
        className="w-full p-3 mt-1 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-3 px-6 py-2 rounded text-white font-semibold ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {loading ? 'Generating...' : 'Generate 3D Model'}
      </button>
    </motion.div>
  )
}

export default PromptInput