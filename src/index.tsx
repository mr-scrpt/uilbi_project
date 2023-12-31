import App from '@/app/App'
import { ErrorBoundary } from '@/app/provider/ErrorBoundary'
import { StoreProvider } from '@/app/provider/StoreProvider'
import { ThemeEnum } from '@/app/provider/ThemeProvider/type'
import { ThemeProvider } from '@/app/provider/ThemeProvider/ui/ThemeProvider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// imoort i18n (needs to be bundled ;))
import '@/shared/config/i18n/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider initialTheme={ThemeEnum.DARK}>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
