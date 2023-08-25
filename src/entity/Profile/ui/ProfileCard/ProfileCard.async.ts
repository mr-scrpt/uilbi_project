import { lazy } from 'react'

export const ProfileCardAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(
        () =>
          resolve(
            // @ts-ignore
            import('./ProfileCard').then((module) => ({
              default: module.ProfileCard,
            }))
          ),
        1000
      )
    })
)
