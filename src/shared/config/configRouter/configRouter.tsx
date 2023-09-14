import { AboutPage } from 'page/AboutPage'
import { ArticleFeedPage } from 'page/ArticleFeedPage'
import { ArticlePage } from 'page/ArticlePage'
import { MainPage } from 'page/MainPage'
import { NotFoundPage } from 'page/NotFoundPage'
import { ProfilePage } from 'page/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRouterProps = RouteProps & {
  authOnly?: boolean
}
export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_FEED = 'articleFeed',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile/',
  [RouteApp.ARTICLE_FEED]: '/article_feed',
  [RouteApp.ARTICLE]: '/article_feed/', // + id

  // Последний
  [RouteApp.NOT_FOUND]: '*',
}

export const routeConfig: Record<RouteApp, AppRouterProps> = {
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
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [RouteApp.ARTICLE_FEED]: {
    path: RoutePath.articleFeed,
    element: <ArticleFeedPage />,
    authOnly: true,
  },
  [RouteApp.ARTICLE]: {
    path: `${RoutePath.article}:id`,
    element: <ArticlePage />,
    authOnly: true,
  },
}
