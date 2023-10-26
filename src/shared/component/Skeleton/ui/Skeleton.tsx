import { CSSProperties, FC } from 'react'
import { classNames } from '@/shared/lib/classNames'

import { SkeletonProps } from '../type/props.type'
import cls from './Skeleton.module.scss'

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, height, width, maxWidth, children, borderRadius } = props

  const clsSkeleton = classNames(cls.skeleton, [className], {})

  const styleLine: CSSProperties = {
    width,
    height,
    maxWidth,
    borderRadius,
  }
  return (
    <div className={clsSkeleton} style={styleLine}>
      {children}
    </div>
  )
}
