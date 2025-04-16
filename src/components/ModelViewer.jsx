import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion'

const Model = ({ url }) => {
  const model = useLoader(GLTFLoader, url)
  return <primitive object={model.scene} scale={0.5} />
}

const ModelViewer = ({ modelUrl }) => {
  if (!modelUrl) return (
    <motion.p
      className="text-gray-400 text-center mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Model will appear here once generated.
    </motion.p>
  )

  return (
    <motion.div
      className="h-[500px] bg-gray-900 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Environment preset="city" />
        <Suspense fallback={<span className="text-white">Loading model...</span>}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </motion.div>
  )
}

export default ModelViewer