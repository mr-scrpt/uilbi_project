import { AboutPage } from 'page/AboutPage'
import { MainPage } from 'page/MainPage'
import { NotFoundPage } from 'page/NotFoundPage'
import { ProfilePage } from 'page/ProfilePage'
import { RouteProps } from 'react-router-dom'

export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
  PROFILE = 'profile',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile',
  [RouteApp.NOT_FOUND]: '*',
}

export const routeConfig: Record<RouteApp, RouteProps> = {
  [RouteApp.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [RouteApp.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [RouteApp.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
  [RouteApp.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
}
