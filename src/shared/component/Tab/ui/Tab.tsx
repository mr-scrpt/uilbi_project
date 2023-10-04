import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'

import { TabProps } from '../type/props.type'
import cls from './Tab.module.scss'

export const Tab = memo((props: TabProps) => {
  const { className, name, value, onTabClick, active } = props

  const clickHandler = useCallback(
    (value: string) => {
      if (onTabClick) {
        onTabClick(value)
      }
    },
    [onTabClick]
  )

  const clsTab = classNames(cls.tab, [className], {
    [cls.active]: active,
  })
  return (
    <div className={clsTab} onClick={() => clickHandler(value)}>
      <div className={cls.inner}>
        <div className={cls.content}>{name}</div>
      </div>
    </div>
  )
})
