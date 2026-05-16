import { Button } from '../components'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main style={{ padding: '0' }}>
      <div id="center" style={{ minHeight: '100vh', padding: 'var(--gap-xl)' }}>
        <h1 style={{ fontSize: '3rem', marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-xl)', fontWeight: '700', letterSpacing: '-0.02em' }}>
          About Emotion Design System
        </h1>
        <div style={{ maxWidth: '700px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: 'var(--gap-lg)', color: 'rgba(255,255,255,0.9)' }}>
            This is a modern design system built with React and TypeScript, featuring minimal Bauhaus-inspired components.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: 'var(--gap-xl)', color: 'rgba(255,255,255,0.7)' }}>
            Our system includes reusable components like buttons, cards, carousels, and more, all designed with consistency and accessibility in mind. Each component is carefully crafted to maintain the aesthetic principles of Bauhaus minimalism while providing a delightful user experience.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: 'var(--gap-2xl)', color: 'rgba(255,255,255,0.7)' }}>
            The design system uses CSS custom properties for theming, allowing for dynamic color changes while maintaining a cohesive visual language throughout the application.
          </p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">← Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
