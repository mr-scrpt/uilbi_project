import { AboutPage } from 'page/AboutPage';
import { MainPage } from 'page/MainPage';
import { RouteProps } from 'react-router-dom';

export enum RouteApp {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
};

export const routeConfig: Record<RouteApp, RouteProps> = {
  [RouteApp.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [RouteApp.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
