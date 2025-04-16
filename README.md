# 🏗️ VisionCraft 3D

**VisionCraft 3D** is a cutting-edge web app that transforms **2D images** or **text prompts** into **interactive 3D models** of architectural structures such as homes, hotels, hospitals, and temples — powered by AI and rendered in-browser with Three.js.

---

## 🚀 Features

- 🖼️ Upload 2D images or multiple-angle photos
- ✍️ Enter text prompts to describe desired structure
- 🏡 Choose structure types: Home, Hotel, Temple, Hospital
- 🎨 Select interior styles and texture materials
- 🌐 View realistic 3D models with drag-and-zoom
- 🔄 Drag & drop scene builder *(beta UI)*
- 🕶️ AR Preview placeholder *(WebXR-ready)*
- 🔗 Share model via link
- 💾 Export `.glb` models *(coming soon)*

---

## 📸 Screenshots

| 3D Viewer | Builder Interface | Prompt Input |
|----------|-------------------|--------------|
| ![](https://via.placeholder.com/300x180) | ![](https://via.placeholder.com/300x180) | ![](https://via.placeholder.com/300x180) |

---

## 🧰 Tech Stack

| Layer       | Tech                            |
|-------------|---------------------------------|
| Frontend    | React.js, Tailwind CSS, Vite    |
| 3D Engine   | Three.js, React Three Fiber     |
| AI Backend  | Replicate API, OpenAI (optional)|
| AR Support  | WebXR (placeholder)             |
| Routing     | React Router                    |

## 📂 Project Structure

visioncraft3d/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx

---

## 🛠️ Local Setup

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/visioncraft3d.git
cd vision-3D
cd client
npm install
npm run dev
