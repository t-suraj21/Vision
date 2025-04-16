import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import LoginForm from './components/LoginForm'
import RegisterPage from './components/RegisterPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<App />} />
        <Route path="/login" element={<LoginForm onLogin={() => {}} />} />
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)