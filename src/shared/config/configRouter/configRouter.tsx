import { AboutPage } from '@/page/AboutPage'
import { AdminPage } from '@/page/AdminPage'
import { ArticleCreatePage } from '@/page/ArticleCreatePage'
import { ArticleEditPage } from '@/page/ArticleEditPage'
import { ArticleFeedPage } from '@/page/ArticleFeedPage'
import { ArticlePage } from '@/page/ArticlePage'
import { ForbiddenPage } from '@/page/ForbiddenPage/ui/ForbiddenPage'
import { MainPage } from '@/page/MainPage'
import { NotFoundPage } from '@/page/NotFoundPage'
import { ProfilePage } from '@/page/ProfilePage'
import { RouteProps } from 'react-router-dom'
import { RoleEnum } from '@/shared/type/role/role.enum'

export type AppRouterProps = RouteProps & {
  authOnly?: boolean
  userOnly?: boolean
  role?: RoleEnum[]
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
  ADMIN_PANEL = 'admin',
  FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile/',
  [RouteApp.ARTICLE_FEED]: '/article_feed',
  [RouteApp.ARTICLE]: '/article_feed/', // + id
  [RouteApp.ARTICLE_CREATE]: '/article/create',
  [RouteApp.ARTICLE_EDIT]: '/article_feed/:id/edit',
  [RouteApp.ADMIN_PANEL]: '/admin',
  [RouteApp.FORBIDDEN]: '/forbidden',

  // Последний
  [RouteApp.NOT_FOUND]: '*',
}

export const routeConfig: Record<RouteApp, AppRouterProps> = {
  [RouteApp.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    userOnly: true,
    // authOnly: true,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.ARTICLE_FEED]: {
    path: RoutePath.articleFeed,
    element: <ArticleFeedPage />,
    authOnly: false,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.ARTICLE]: {
    path: `${RoutePath.article}:id`,
    element: <ArticlePage />,
    authOnly: false,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleCreatePage />,
    authOnly: true,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.ADMIN_PANEL]: {
    path: `${RoutePath.admin}`,
    element: <AdminPage />,
    authOnly: false,
    role: [RoleEnum.ADMIN],
  },
  [RouteApp.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
    // role: [RoleEnum.USER, RoleEnum.MANAGER],
  },
  [RouteApp.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true,
  },
}
