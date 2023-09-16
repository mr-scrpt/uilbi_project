import { memo } from 'react'
import { Icon, IconEnum } from 'shared/component/Icon'
import { classNames } from 'shared/lib/classNames'

import { ViewProps } from '../type/props.type'
import cls from './View.module.scss'

export const View = memo((props: ViewProps) => {
  const { className, count } = props

  const clsView = classNames(cls.view, [className], {})
  return (
    <div className={clsView}>
      <div className={cls.inner}>
        <div className={cls.count}>{count}</div>
        <Icon icon={IconEnum.EYE} className={cls.icon} />
      </div>
    </div>
  )
})
