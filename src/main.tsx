import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import { AppRouter } from '@/router/AppRouter'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { muiTheme } from '@/theme/muiTheme'

// Create Emotion cache for consistent styling in production
const emotionCache = createCache({ key: 'css', prepend: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>,
)
