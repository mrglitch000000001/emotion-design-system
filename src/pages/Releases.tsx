import { Link } from 'react-router-dom'
import { Button } from '../components'

export default function Releases() {
  const releases = [
    {
      version: '0.3.0',
      date: 'May 2026',
      title: 'Router Integration',
      changes: [
        'Added React Router for multi-page navigation',
        'Created Home, About, Documentation, and Releases pages',
        'Improved navigation with header links',
        'Enhanced layouts with improved typography and spacing',
      ]
    },
    {
      version: '0.2.0',
      date: 'April 2026',
      title: 'Component Suite Expansion',
      changes: [
        'Added Carousel component for showcasing multiple items',
        'Introduced ActionRadios component',
        'Enhanced BrightnessSlider functionality',
        'Improved responsive design across all components',
      ]
    },
    {
      version: '0.1.0',
      date: 'March 2026',
      title: 'Initial Release',
      changes: [
        'Initial launch of Emotion Design System',
        'Core components: Button, Card, SearchBar, BrightnessSlider',
        'CSS design tokens and theming system',
        'Bauhaus-inspired minimal design philosophy',
      ]
    },
  ]

  return (
    <main style={{ padding: '0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--gap-xl)' }}>
        <h1 style={{ fontSize: '3rem', marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-md)', fontWeight: '700', letterSpacing: '-0.02em' }}>
          Releases
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--gap-2xl)', fontSize: '1.25rem' }}>
          Version history and changelog for the Emotion Design System
        </p>

        <div>
          {releases.map((release, index) => (
            <div
              key={index}
              style={{
                padding: 'var(--gap-lg)',
                borderLeft: '4px solid var(--accent)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '8px',
                marginBottom: 'var(--gap-lg)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--gap-sm)' }}>
                <h3 style={{ margin: 0, fontSize: '1.75rem', fontWeight: '700' }}>v{release.version}</h3>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem' }}>{release.date}</span>
              </div>
              <h4 style={{ margin: 'var(--gap-md) 0', color: 'var(--accent)', fontSize: '1.375rem', fontWeight: '600' }}>{release.title}</h4>
              <ul style={{ margin: 'var(--gap-md) 0', paddingLeft: '2rem' }}>
                {release.changes.map((change, idx) => (
                  <li key={idx} style={{ marginBottom: 'var(--gap-md)', fontSize: '1.125rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--gap-2xl)', paddingTop: 'var(--gap-2xl)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: 'var(--gap-md)', justifyContent: 'center' }}>
          <Link to="/documentation" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">← Documentation</Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="ghost">Home →</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
