import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './style/index.scss';
import {MainPageAsync} from './page/MainPage/MainPage.async'
import { AboutPageAsync } from './page/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helper/classNames';




const App = () => {
    const {theme, themeToggle} = useTheme()
    const classApp = classNames('app', ['theme', theme])

    return (
        <div className={classApp}>
            <button
            onClick={themeToggle}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
