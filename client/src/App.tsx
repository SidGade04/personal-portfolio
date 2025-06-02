// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'
import { initLenis } from './lib/scroll'

function App() {
  // useEffect(() => {
  //   initLenis()
  // }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
