import { AboutPage } from 'page/AboutPage'
import { ArticleCreatePage } from 'page/ArticleCreatePage'
import { ArticleEditPage } from 'page/ArticleEditPage'
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
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile/',
  [RouteApp.ARTICLE_FEED]: '/article_feed',
  [RouteApp.ARTICLE]: '/article_feed/', // + id
  [RouteApp.ARTICLE_CREATE]: '/article/create',
  [RouteApp.ARTICLE_EDIT]: '/article_feed/:id/edit',

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
  [RouteApp.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleCreatePage />,
    authOnly: true,
  },
  [RouteApp.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
}
