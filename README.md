# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Emotion Design System

    This repository contains a component-driven design system implemented with React, TypeScript and Vite. It follows an Atomic Design structure (atoms → molecules → organisms) and uses per-component CSS alongside a global theme file.

    **Tech stack**
    - **Framework:** React (JSX/TSX)
    - **Language:** TypeScript
    - **Bundler / Dev server:** Vite
    - **Styling:** Component-scoped `.css` files and a global `styles/theme.css`
    - **Dependencies:** `bootstrap` is included for optional utility classes
    - **Deployment:** `gh-pages` support (see `vite.config.ts` and `package.json`)

    **Repository status:** development-ready. The `vite.config.ts` base is set for a GitHub Pages site at `/emotion-design-system/` and `package.json` contains `predeploy`/`deploy` scripts to publish `dist` via `gh-pages`.

    **Contents**
    - `src/` — application and component source
      - `components/` — design system components organized by atomic level
        - `atoms/` — smallest reusable building blocks (buttons, inputs, etc.)
        - `molecules/` — combinations of atoms (search bars, cards, radio groups)
        - `organisms/` — composed UI sections (headers, navigation)
      - `styles/theme.css` — global CSS variables and tokens

    ## Goals and conventions

    - Atomic Design: components must be placed in the folder matching their level. Prefer smaller building blocks (atoms) composed into larger ones (molecules, organisms).
    - One component per folder. Each component folder should include:
      - `Component.tsx` — React component implementation
      - `Component.css` — styles for the component (imported inside the component file)
      - `index.ts` — re-export for easy barrel imports
    - Keep styling local to the component where possible; use `styles/theme.css` for tokens (colors, spacing, typography).
    - Use TypeScript for component props. Prefer explicit prop interfaces and avoid `any`.

    ## Adding a new component (recommended pattern)

    1. Create a folder under the appropriate level, e.g. `src/components/atoms/MyButton/`.
    2. Add `MyButton.tsx`:

    ```tsx
    import React from 'react'
    import './MyButton.css'

    export interface MyButtonProps {
      children?: React.ReactNode
      onClick?: () => void
    }

    export function MyButton({ children, onClick }: MyButtonProps) {
      return (
        <button className="eds-my-button" onClick={onClick}>
          {children}
        </button>
      )
    }

    export default MyButton
    ```

    3. Add `MyButton.css` scoped styles. Use the `eds-` prefix for global consistency (E ds = Emotion Design System).
    4. Add `index.ts` to re-export the component:

    ```ts
    export { MyButton } from './MyButton'
    ```

    5. Add an export in the level barrel (e.g. `src/components/atoms/index.ts`) if necessary. The top-level `src/components/index.ts` already re-exports `./atoms`, `./molecules`, and `./organisms`.

    ## Theming and tokens

    - Central tokens live in `src/styles/theme.css`. Prefer CSS custom properties for colors, spacing, and typography tokens.
    - Example (in `theme.css`):

    ```css
    :root {
      --eds-color-primary: #0d6efd;
      --eds-color-bg: #ffffff;
      --eds-spacing-sm: 8px;
      --eds-spacing-md: 16px;
    }
    ```

    - Components should reference these variables rather than hard-coded values.

    ## Exports and package usage

    - The project uses barrel exports for convenience. Import a component like:

    ```ts
    import { Button } from './src/components'
    ```

    or from the relative component path for clarity:

    ```ts
    import { MyButton } from './src/components/atoms/MyButton'
    ```

    ## Scripts and local development

    - `npm run dev` — Starts Vite dev server with HMR
    - `npm run build` — Type-check (via `tsc -b`) and produce a production build in `dist`
    - `npm run preview` — Preview the production build locally
    - `npm run lint` — Run ESLint across the repo

    Deployment to GitHub Pages
    - `npm run predeploy` — runs the production build (alias to `npm run build`)
    - `npm run deploy` — publishes the `dist` folder to the `gh-pages` branch (uses `gh-pages` package)

    Example publish flow:

    ```bash
    npm run predeploy
    npm run deploy
    ```

    If you'd rather publish from a `docs/` folder on `main` (GitHub Pages default for project sites), set `build.outDir` to `docs` in `vite.config.ts` and update `package.json.deploy` accordingly.

    ## Accessibility & testing

    - Follow ARIA best practices for interactive components (buttons, radios, inputs).
    - Add unit tests for component logic and snapshot/visual tests for appearance (recommended tools: Jest + React Testing Library; Chromatic or Playwright for visual/interaction tests).

    ## CI / Release suggestions

    - Add a CI step to run `npm run build` and `npm run lint` on pull requests.
    - For automated publishing, configure a GitHub Actions workflow that builds and runs `gh-pages` on a release or `main` push.

    ## Contributing

    - Follow the atomic structure and naming conventions above.
    - Keep components small, focused, and well-typed.

    ---

    If you'd like, I can also:
    - add a `docs/` publish workflow (GitHub Actions),
    - convert the styling to CSS modules or CSS-in-JS, or
    - scaffold unit tests for one component as an example.

