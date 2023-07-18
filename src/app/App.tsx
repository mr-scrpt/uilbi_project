import './style/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';
import { Suspense, useState } from 'react';
import cls from './App.module.scss';
import { AppRouter } from './provider/router';

function App() {
  const { theme } = useTheme();

  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => {
    setCollapsed((prev) => !prev);
  };

  const classApp = classNames(cls.app, ['theme', theme], {});

  const clsSidebar = classNames(cls.boxSidebar, [], {
    [cls.boxSidebar_collapse]: collapsed,
    [cls.boxSidebar_open]: !collapsed,

  });

  return (
    <div className={classApp}>
      <Suspense fallback="transslation">

        <div className={cls.inner}>
          <Navbar className={cls.boxNavbar} />

          <div className={cls.boxMain}>
            <Sidebar className={clsSidebar} toggleHandler={toggleHandler} />
            <AppRouter className={cls.boxContent} />
          </div>

          <div className={cls.boxFooter}>footer</div>
        </div>
      </Suspense>

    </div>
  );
}

export default App;
