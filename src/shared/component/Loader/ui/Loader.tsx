import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { LoaderProps } from '../type/props.type'
import cls from './Loader.module.scss'

export const Loader: FC<LoaderProps> = memo((props: LoaderProps) => {
  const { className } = props

  const clsLoader = classNames(cls.loader, [className], {})
  const clsDotFirst = classNames(cls.dotFirst, [cls.dot])
  const clsDotSecond = classNames(cls.dotSecond, [cls.dot])
  const clsDotThird = classNames(cls.dotThird, [cls.dot])
  const clsDotFourth = classNames(cls.dotFourth, [cls.dot])

  return (
    <div className={clsLoader}>
      <div className={cls.inner}>
        <div className={cls.box}>
          <div className={clsDotFirst}></div>
          <div className={clsDotSecond}></div>
          <div className={clsDotThird}></div>
          <div className={clsDotFourth}></div>
        </div>
      </div>
    </div>
  )
})
