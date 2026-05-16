
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Documentation from './pages/Documentation'
import Releases from './pages/Releases'

function App() {
  return (
    <Router basename="/emotion-design-system/">
      <nav style={{ padding: 'var(--gap-md)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: 'var(--gap-md)', maxWidth: '1200px', margin: '0 auto' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: 'bold' }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-h)' }}>
            About
          </Link>
          <Link to="/documentation" style={{ textDecoration: 'none', color: 'var(--text-h)' }}>
            Documentation
          </Link>
          <Link to="/releases" style={{ textDecoration: 'none', color: 'var(--text-h)' }}>
            Releases
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
    </Router>
  )
}

export default App
