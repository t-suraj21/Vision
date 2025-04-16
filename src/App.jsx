import React, { useState } from 'react'
import UploadImage from './components/UploadImage'
import PromptInput from './components/PromptInput'
import ModelViewer from './components/ModelViewer'
import StructureSelector from './components/StructureSelector'
import InteriorStyleSelector from './components/InteriorStyleSelector'
import TextureSelector from './components/TextureSelector'
import MultiAngleUpload from './components/MultiAngleUpload'
import ARPreview from './components/ARPreview'
import SceneBuilder from './components/SceneBuilder'
import ShareModel from './components/ShareModel'
// import ExportButton from './components/ExportButton' // Optional: once 3D export is ready

function App() {
  const [modelUrl, setModelUrl] = useState(null)
  const [structure, setStructure] = useState('home')
  const [style, setStyle] = useState('modern')
  const [texture, setTexture] = useState('wood')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [multiImages, setMultiImages] = useState([])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) setUploadedImage(URL.createObjectURL(file))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-cyan-400">Vision-3D</h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* 🏗️ Scene Builder */}
        <SceneBuilder />

        {/* 🖼️ Upload Images */}
        <UploadImage onUpload={handleImageUpload} />
        <MultiAngleUpload onImagesUpload={setMultiImages} />

        {/* 🏠 Structure & Style */}
        <StructureSelector onSelect={setStructure} />
        <InteriorStyleSelector onStyleChange={setStyle} />
        <TextureSelector onTextureChange={setTexture} />

        {/* 💬 Prompt + Viewer */}
        <PromptInput
          structure={structure}
          style={style}
          texture={texture}
          image={uploadedImage}
          setModelUrl={setModelUrl}
        />

        {/* 🕶️ AR Preview */}
        <ARPreview modelUrl={modelUrl} />

        {/* 🔍 3D Viewer */}
        <ModelViewer modelUrl={modelUrl} />

        {/* 🔗 Share */}
        {modelUrl && <ShareModel modelUrl={modelUrl} />}

        {/* 💾 Export (optional) */}
        {/* <ExportButton modelRef={modelRef} /> */}
      </div>
    </div>
  )
}

export default App