import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If publishing to GitHub Pages for the repository `emotion-design-system`,
// set `base` to the repository name path. Adjust if your repo name differs.
// https://vite.dev/config/
export default defineConfig({
  base: '/emotion-design-system/',
  plugins: [react()],
})
