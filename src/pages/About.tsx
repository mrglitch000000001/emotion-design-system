import { Button } from '../components'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main>
      <div id="center">
        <h1>About Emotion Design System</h1>
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: 'var(--gap-md)' }}>
            This is a modern design system built with React and TypeScript, featuring minimal Bauhaus-inspired components.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: 'var(--gap-lg)', color: 'var(--text-secondary)' }}>
            Our system includes reusable components like buttons, cards, carousels, and more, all designed with consistency and accessibility in mind.
          </p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">← Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
