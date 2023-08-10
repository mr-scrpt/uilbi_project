import { FC, lazy } from 'react'

import { LoginFormProps } from '../type/props.type'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() =>
  import('./LoginForm').then((module) => ({ default: module.LoginForm }))
)

// export const LoginFormAsync = lazy<FC<LoginFormProps>>(
//   () =>
//     new Promise((resolve) => {
//       // @ts-ignore
//       // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//       setTimeout(() => resolve(import('./LoginForm')), 1500)
//     })
// )

// export const LoginFormAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       // @ts-ignore
//       // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//       setTimeout(
//         () =>
//           resolve(
//             // @ts-ignore
//             import('./LoginForm').then((module) => ({
//               default: module.LoginForm,
//             }))
//           ),
//         3000
//       )
//     })
// )
