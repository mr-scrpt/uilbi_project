import './style/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from 'widget/Navbar';
import cls from './App.module.scss';
// import IconTest from 'shared/asset/icon/theme-dark.svg'

const App = () => {
  const { theme } = useTheme()
  const classApp = classNames(cls.app, ['theme', theme], {})

  return (
    <div className={classApp}>
      {/* <IconTest/> */}

      <div className={cls.inner}>
        <Navbar className={cls.boxNavbar}/>

        <div className={cls.boxContent}>
        </div>

        <div className={cls.boxFooter}></div>
      </div>

      <AppRouter />
    </div>
  );
};

export default App;
