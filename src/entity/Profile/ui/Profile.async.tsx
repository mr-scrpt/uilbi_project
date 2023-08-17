import { lazy } from 'react'

export const ProfileAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(
        () =>
          resolve(
            // @ts-ignore
            import('./Profile').then((module) => ({
              default: module.Profile,
            }))
          ),
        1000
      )
    })
)
