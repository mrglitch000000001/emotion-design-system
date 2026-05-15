import React, { useEffect, useState } from 'react'
import './BrightnessSlider.css'

const STORAGE_KEY = 'app:brightness'

export default function BrightnessSlider() {
  const [percent, setPercent] = useState<number>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      return v ? Number(v) : 100
    } catch {
      return 100
    }
  })

  useEffect(() => {
    const val = (percent / 100).toString()
    document.documentElement.style.setProperty('--app-brightness', val)
    try {
      localStorage.setItem(STORAGE_KEY, String(percent))
    } catch {}
  }, [percent])

  return (
    <label className="brightness-slider" aria-label="App brightness">
      <span className="bsr__label">Brightness</span>
      <input
        className="bsr__range"
        type="range"
        min={50}
        max={150}
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        aria-valuemin={50}
        aria-valuemax={150}
        aria-valuenow={percent}
      />
      <span className="bsr__value">{percent}%</span>
    </label>
  )
}
