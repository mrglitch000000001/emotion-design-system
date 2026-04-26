
import './App.css'
import { Button, Card, SearchBar, Carousel, ActionRadios } from './components'
import { useEffect, useState } from 'react'

function App() {
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
    <>
      <main>
        <div id="center">
          <h1>Emotion Design System</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', alignItems: 'center' }}>
            <SearchBar onSearch={(q) => console.log('Search:', q)} />
            <div style={{ display: 'flex', gap: 'var(--gap-sm)', alignItems: 'center', marginTop: 'var(--gap-xxs)' }}>
              <Button variant="download" aria-label="Download file">Download</Button>
              <Button variant="secondary" aria-label="Save as PDF">Save as PDF</Button>
              <Button variant="ghost" aria-label="More options">More</Button>
            </div>
          </div>

          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <ActionRadios />
            <Carousel>
              {cards.map((c, i) => (
                <Card key={i} title={c.title} description={c.description} cta={c.cta} />
              ))}
            </Carousel>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
