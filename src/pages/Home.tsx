import { Button, Card, SearchBar, Carousel, ActionRadios, BrightnessSlider } from '../components'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cards, setCards] = useState([
    { title: 'Minimal Bauhaus Card', description: 'A compact card component using central design tokens for spacing, typography, and color.', cta: 'Explore' },
    { title: 'Card Two', description: 'Another example card to demonstrate carousel behavior.', cta: 'Learn' },
    { title: 'Card Three', description: 'Third slide in the carousel showing consistent spacing and alignment.', cta: 'Try' },
  ])

  useEffect(() => {
    const onShuffle = () => {
      setCards((prev) => {
        const copy = [...prev]
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[copy[i], copy[j]] = [copy[j], copy[i]]
        }
        return copy
      })
    }
    window.addEventListener('design:shuffle-cards', onShuffle as EventListener)
    return () => window.removeEventListener('design:shuffle-cards', onShuffle as EventListener)
  }, [])

  return (
    <main>
      <div id="center" style={{ minHeight: '100vh', padding: 'var(--gap-xl)', gap: 'var(--gap-xl)' }}>
        <h1 style={{ fontSize: '3.5rem', marginTop: 'var(--gap-xl)', marginBottom: 0, fontWeight: '700', letterSpacing: '-0.02em' }}>
          Emotion Design System
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginTop: 'var(--gap-lg)', marginBottom: 0, maxWidth: '700px', lineHeight: '1.6' }}>
          A modern design system built with React and TypeScript, featuring minimal Bauhaus-inspired components.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-lg)', alignItems: 'center', marginTop: 'var(--gap-xl)' }}>
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <SearchBar onSearch={(q) => console.log('Search:', q)} />
          </div>
          <BrightnessSlider />
          <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center', marginTop: 'var(--gap-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="download" aria-label="Download file">Download</Button>
            <Button variant="secondary" aria-label="Save as PDF">Save as PDF</Button>
            <Button variant="ghost" aria-label="More options">More</Button>
          </div>
        </div>

        <div style={{ marginTop: 'var(--gap-2xl)', width: '100%' }}>
          <ActionRadios />
          <div style={{ marginTop: 'var(--gap-xl)' }}>
            <Carousel>
              {cards.map((c, i) => (
                <Card key={i} title={c.title} description={c.description} cta={c.cta} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  )
}
