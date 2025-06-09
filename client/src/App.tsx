// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Toaster } from "react-hot-toast";
// import { useEffect } from 'react'
// import { initLenis } from './lib/scroll'

function App() {
  // useEffect(() => {
  //   initLenis()
  // }, [])

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    </>

  )
}

export default App
