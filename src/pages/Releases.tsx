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
    <main style={{ padding: 'var(--gap-lg)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Releases</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--gap-lg)' }}>
          Version history and changelog for the Emotion Design System
        </p>

        <div>
          {releases.map((release, index) => (
            <div
              key={index}
              style={{
                padding: 'var(--gap-md)',
                borderLeft: '3px solid var(--accent)',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '4px',
                marginBottom: 'var(--gap-md)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--gap-sm)' }}>
                <h3 style={{ margin: 0 }}>v{release.version}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{release.date}</span>
              </div>
              <h4 style={{ margin: 'var(--gap-xs) 0', color: 'var(--accent)' }}>{release.title}</h4>
              <ul style={{ margin: 'var(--gap-sm) 0', paddingLeft: '20px' }}>
                {release.changes.map((change, idx) => (
                  <li key={idx} style={{ marginBottom: 'var(--gap-xs)' }}>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--gap-lg)', paddingTop: 'var(--gap-lg)', borderTop: '1px solid var(--border)' }}>
          <Link to="/documentation" style={{ textDecoration: 'none', marginRight: 'var(--gap-md)' }}>
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
