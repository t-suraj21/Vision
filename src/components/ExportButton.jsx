import React from 'react'
const ExportButton = ({ modelRef }) => {
  const handleExport = () => {
    if (!modelRef?.current) return
    const gltf = modelRef.current
    const blob = new Blob([JSON.stringify(gltf)], { type: 'model/gltf+json' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'visioncraft3d_model.glb'
    link.click()
  }

  return (
    <button onClick={handleExport} className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-700 text-white">
      Export Model (.glb)
    </button>
  )
}
export default ExportButton
