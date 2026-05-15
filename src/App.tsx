
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <header style={{ padding: 'var(--gap-sm)', borderBottom: '1px solid var(--muted)' }}>
        <nav style={{ display: 'flex', gap: 'var(--gap-sm)', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
