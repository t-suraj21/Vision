import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'
import { MdOutlineLogin } from 'react-icons/md'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center p-6">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-lg">
          Welcome to <span className="text-white">Vision 3D</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Transform your 2D ideas into interactive 3D structures. Whether you're designing a home, hotel, hospital, or temple, our AI-powered platform turns your vision into a digital reality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/builder"
            className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg text-white text-lg font-medium transition shadow-md"
          >
            <FaRocket className="text-xl" />
            Launch 3D Builder
          </Link>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-white text-lg font-medium border border-gray-600 shadow-md"
          >
            <MdOutlineLogin className="text-xl" />
            Login / Register
          </Link>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          <p>Powered by <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Three.js</span>, and <span className="text-yellow-400">AI magic ✨</span></p>
        </div>
      </motion.div>
    </div>
  )
}

export default Home