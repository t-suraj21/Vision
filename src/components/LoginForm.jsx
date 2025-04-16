import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with real login API
    onLogin({ email, token: 'dummy_token' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-4">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-cyan-600"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-4">
          <FaUserCircle className="text-cyan-400 text-4xl" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">Login to VisionCraft 3D</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 py-3 rounded text-white font-semibold hover:bg-cyan-700 transition-all"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-cyan-400 hover:underline">Register here</Link>
        </p>
      </motion.form>
    </div>
  )
}

export default LoginPage