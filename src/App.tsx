
import './App.css'
import { Button, Card } from './components'

function App() {
  

  return (
    <>
      <main>
        <div id="center">
          <h1>Emotion Design System</h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="download" aria-label="Download file">Download</Button>
            <Button variant="secondary" aria-label="Save as PDF">Save as PDF</Button>
            <Button variant="ghost" aria-label="More options">More</Button>
          </div>

          <div style={{ marginTop: '24px' }}>
            <Card
              title="Minimal Bauhaus Card"
              description="A compact card component using central design tokens for spacing, typography, and color."
              cta="Explore"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
