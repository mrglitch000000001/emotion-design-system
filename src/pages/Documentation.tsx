import { Link } from 'react-router-dom'
import { Button } from '../components'

export default function Documentation() {
  return (
    <main style={{ padding: 'var(--gap-lg)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Documentation</h1>
        
        <section style={{ marginTop: 'var(--gap-lg)', marginBottom: 'var(--gap-lg)' }}>
          <h2>Getting Started</h2>
          <p>Welcome to the Emotion Design System documentation. This guide will help you understand and use our components effectively.</p>
        </section>

        <section style={{ marginBottom: 'var(--gap-lg)' }}>
          <h3>Components</h3>
          <div style={{ marginTop: 'var(--gap-md)' }}>
            <h4>Button</h4>
            <p>A versatile button component with multiple variants: primary, secondary, download, and ghost.</p>
            <code style={{ display: 'block', padding: 'var(--gap-sm)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginTop: 'var(--gap-sm)' }}>
              {'<Button variant="primary">Click me</Button>'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <h4>Card</h4>
            <p>Display content in a compact, organized card layout with a title, description, and call-to-action.</p>
            <code style={{ display: 'block', padding: 'var(--gap-sm)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginTop: 'var(--gap-sm)' }}>
              {'<Card title="Title" description="Description" cta="Action" />'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <h4>SearchBar</h4>
            <p>A search input component for user queries.</p>
            <code style={{ display: 'block', padding: 'var(--gap-sm)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginTop: 'var(--gap-sm)' }}>
              {'<SearchBar onSearch={(q) => console.log(q)} />'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <h4>BrightnessSlider</h4>
            <p>A slider component for controlling brightness/theme settings.</p>
            <code style={{ display: 'block', padding: 'var(--gap-sm)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginTop: 'var(--gap-sm)' }}>
              {'<BrightnessSlider />'}
            </code>
          </div>

          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <h4>Carousel</h4>
            <p>Display multiple items in a rotating carousel with navigation controls.</p>
            <code style={{ display: 'block', padding: 'var(--gap-sm)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginTop: 'var(--gap-sm)' }}>
              {'<Carousel>{items}</Carousel>'}
            </code>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--gap-lg)' }}>
          <h3>Design Tokens</h3>
          <p>Our system uses CSS custom properties for consistent theming. Key tokens include:</p>
          <ul style={{ marginTop: 'var(--gap-md)' }}>
            <li><code>--gap-*</code>: Spacing values (xxs, xs, sm, md, lg)</li>
            <li><code>--accent</code>: Primary accent color</li>
            <li><code>--text-*</code>: Text colors (h for heading, secondary)</li>
            <li><code>--border</code>: Border color</li>
            <li><code>--shadow</code>: Shadow effects</li>
          </ul>
        </section>

        <section style={{ marginBottom: 'var(--gap-lg)' }}>
          <h3>Installation</h3>
          <p>The design system is already integrated into this project. Simply import components from the components folder:</p>
          <code style={{ display: 'block', padding: 'var(--gap-sm)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginTop: 'var(--gap-sm)' }}>
            {'import { Button, Card, SearchBar } from \'./components\''}
          </code>
        </section>

        <div style={{ marginTop: 'var(--gap-lg)', paddingTop: 'var(--gap-lg)', borderTop: '1px solid var(--border)' }}>
          <Link to="/" style={{ textDecoration: 'none', marginRight: 'var(--gap-md)' }}>
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
