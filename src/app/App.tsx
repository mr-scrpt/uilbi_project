import './style/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from 'widget/Navbar';
import IconList from 'shared/asset/icon/theme-light.svg'

const App = () => {
  const { theme } = useTheme()
  const classApp = classNames('app', ['theme', theme], {})

  return (
    <div className={classApp}>
    <IconList/>
    <Navbar/>

      <AppRouter />
    </div>
  );
};

export default App;
