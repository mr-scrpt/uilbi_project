import App from 'app/App'
import { ErrorBoundary } from 'app/provider/ErrorBoundary'
import { ThemeProvider } from 'app/provider/ThemeProvider/ui/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// imoort i18n (needs to be bundled ;))
import 'shared/config/i18n/i18n'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
)
