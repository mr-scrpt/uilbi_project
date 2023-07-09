import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';
import { AboutPageAsync } from './page/AboutPage/AboutPage.async';
import {MainPageAsync} from './page/MainPage/MainPage.async'

const App = () => {
    return (
        <div className="app">
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
