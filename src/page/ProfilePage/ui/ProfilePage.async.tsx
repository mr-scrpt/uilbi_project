import { lazy } from 'react'

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(
        () =>
          resolve(
            // @ts-ignore
            import('./ProfilePage').then((module) => ({
              default: module.ProfilePage,
            }))
          ),
        1000
      )
    })
)
