import App from 'app/App';
import { ThemeProvider } from 'app/provider/ThemeProvider/ui/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import i18n (needs to be bundled ;))
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
