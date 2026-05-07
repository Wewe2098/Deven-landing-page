import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ArticlePage } from './pages/ArticlePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:slug" element={<ArticlePage />} />
    </Routes>
  )
}

export default App
