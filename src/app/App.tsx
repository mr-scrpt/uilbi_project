import { Link } from 'react-router-dom';
import './style/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './provider/router';


const App = () => {
  const { theme, themeToggle } = useTheme()
  const classApp = classNames('app', ['theme', theme], {})

  return (
    <div className={classApp}>
      <button
        onClick={themeToggle}>Сменить тему</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
