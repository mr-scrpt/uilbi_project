import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { CardProps } from '../type/props.type'
import cls from './Card.module.scss'

export const Card = memo((props: CardProps) => {
  const { className, children, ...rest } = props

  const clsCard = classNames(cls.card, [className], {})
  return (
    <div className={clsCard} {...rest}>
      {children}
    </div>
  )
})
