
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <nav style={{ padding: 'var(--gap-md)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: 'var(--gap-md)', maxWidth: '1200px', margin: '0 auto' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: 'bold' }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-h)' }}>
            About
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
