import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './style/index.scss';
import { AboutPage } from 'page/AboutPage';
import { MainPage } from 'page/MainPage';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames';




const App = () => {
    const {theme, themeToggle} = useTheme()
    const classApp = classNames('app', ['theme', theme], {})

    return (
        <div className={classApp}>
            <button
            onClick={themeToggle}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
