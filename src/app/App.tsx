import './style/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from 'widget/Navbar';
import cls from './App.module.scss';
import { Sidebar } from 'widget/Sidebar';
import { useState } from 'react';

const App = () => {
  const { theme } = useTheme()

  const [collapsed, setCollapsed] = useState(false)

  console.log('collapsed', collapsed)

  const toggleHandler = () => {
    setCollapsed(prev => !prev)
  }

  const classApp = classNames(cls.app, ['theme', theme], {})

  const clsSidebar = classNames(cls.boxSidebar, [], {
    [cls.boxSidebar_collapse]: collapsed,
    [cls.boxSidebar_open]: !collapsed,

  })

  // console.log('sidebar cls', clsSidebar)

  return (
    <div className={classApp}>

      <div className={cls.inner}>
        <Navbar className={cls.boxNavbar}/>

        <div className={cls.boxMain}>
          <Sidebar className={clsSidebar} toggleHandler={toggleHandler}/>
          <AppRouter className={cls.boxContent}/>
        </div>

        <div className={cls.boxFooter}>footer</div>
      </div>

    </div>
  );
};

export default App;
