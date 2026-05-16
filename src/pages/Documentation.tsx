import { Link } from 'react-router-dom'
import { Button } from '../components'

export default function Documentation() {
  return (
    <main style={{ padding: '0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--gap-xl)' }}>
        <h1 style={{ fontSize: '3rem', marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-lg)', fontWeight: '700', letterSpacing: '-0.02em' }}>
          Documentation
        </h1>
        
        <section style={{ marginTop: 'var(--gap-2xl)', marginBottom: 'var(--gap-2xl)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--gap-lg)', fontWeight: '600' }}>Getting Started</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
            Welcome to the Emotion Design System documentation. This guide will help you understand and use our components effectively.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--gap-2xl)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--gap-lg)', fontWeight: '600' }}>Components</h3>
          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <h4 style={{ fontSize: '1.375rem', marginBottom: 'var(--gap-md)', fontWeight: '600' }}>Button</h4>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-md)' }}>
              A versatile button component with multiple variants: primary, secondary, download, and ghost.
            </p>
            <code style={{ display: 'block', padding: 'var(--gap-md)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginTop: 'var(--gap-md)', fontSize: '1rem', lineHeight: '1.6', overflowX: 'auto' }}>
              {'<Button variant="primary">Click me</Button>'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-2xl)' }}>
            <h4 style={{ fontSize: '1.375rem', marginBottom: 'var(--gap-md)', fontWeight: '600' }}>Card</h4>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-md)' }}>
              Display content in a compact, organized card layout with a title, description, and call-to-action.
            </p>
            <code style={{ display: 'block', padding: 'var(--gap-md)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginTop: 'var(--gap-md)', fontSize: '1rem', lineHeight: '1.6', overflowX: 'auto' }}>
              {'<Card title="Title" description="Description" cta="Action" />'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-2xl)' }}>
            <h4 style={{ fontSize: '1.375rem', marginBottom: 'var(--gap-md)', fontWeight: '600' }}>SearchBar</h4>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-md)' }}>
              A search input component for user queries.
            </p>
            <code style={{ display: 'block', padding: 'var(--gap-md)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginTop: 'var(--gap-md)', fontSize: '1rem', lineHeight: '1.6', overflowX: 'auto' }}>
              {'<SearchBar onSearch={(q) => console.log(q)} />'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-2xl)' }}>
            <h4 style={{ fontSize: '1.375rem', marginBottom: 'var(--gap-md)', fontWeight: '600' }}>BrightnessSlider</h4>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-md)' }}>
              A slider component for controlling brightness/theme settings.
            </p>
            <code style={{ display: 'block', padding: 'var(--gap-md)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginTop: 'var(--gap-md)', fontSize: '1rem', lineHeight: '1.6', overflowX: 'auto' }}>
              {'<BrightnessSlider />'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-2xl)' }}>
            <h4 style={{ fontSize: '1.375rem', marginBottom: 'var(--gap-md)', fontWeight: '600' }}>Carousel</h4>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-md)' }}>
              Display multiple items in a rotating carousel with navigation controls.
            </p>
            <code style={{ display: 'block', padding: 'var(--gap-md)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginTop: 'var(--gap-md)', fontSize: '1rem', lineHeight: '1.6', overflowX: 'auto' }}>
              {'<Carousel>{items}</Carousel>'}
            </code>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--gap-2xl)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--gap-lg)', fontWeight: '600' }}>Design Tokens</h3>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-lg)' }}>
            Our system uses CSS custom properties for consistent theming. Key tokens include:
          </p>
          <ul style={{ fontSize: '1.125rem', lineHeight: '2', marginTop: 'var(--gap-lg)', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: 'var(--gap-md)', color: 'rgba(255,255,255,0.8)' }}><code style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>--gap-*</code>: Spacing values (xxs, xs, sm, md, lg)</li>
            <li style={{ marginBottom: 'var(--gap-md)', color: 'rgba(255,255,255,0.8)' }}><code style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>--accent</code>: Primary accent color</li>
            <li style={{ marginBottom: 'var(--gap-md)', color: 'rgba(255,255,255,0.8)' }}><code style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>--text-*</code>: Text colors (h for heading, secondary)</li>
            <li style={{ marginBottom: 'var(--gap-md)', color: 'rgba(255,255,255,0.8)' }}><code style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>--border</code>: Border color</li>
            <li style={{ color: 'rgba(255,255,255,0.8)' }}><code style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px' }}>--shadow</code>: Shadow effects</li>
          </ul>
        </section>

        <section style={{ marginBottom: 'var(--gap-2xl)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--gap-lg)', fontWeight: '600' }}>Installation</h3>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--gap-lg)' }}>
            The design system is already integrated into this project. Simply import components from the components folder:
          </p>
          <code style={{ display: 'block', padding: 'var(--gap-md)', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginTop: 'var(--gap-md)', fontSize: '1rem', lineHeight: '1.6', overflowX: 'auto' }}>
            {'import { Button, Card, SearchBar } from \'./components\''}
          </code>
        </section>

        <div style={{ marginTop: 'var(--gap-2xl)', paddingTop: 'var(--gap-2xl)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: 'var(--gap-md)', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">← Home</Button>
          </Link>
          <Link to="/releases" style={{ textDecoration: 'none' }}>
            <Button variant="ghost">Releases →</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
