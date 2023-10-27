import { Star } from '@/shared/component/Star'
import { arrayLenGen } from '@/shared/lib/arrayLenGen/arrayLenGen'
import { classNames } from '@/shared/lib/classNames'
import { memo, useState } from 'react'

import { StarLineProps } from '../type/props.type'
import { StarSizeEnum } from '../type/size.enum'
import cls from './StarLine.module.scss'

export const StarLine = memo((props: StarLineProps) => {
  const { className, starCount = 5, size = StarSizeEnum.L, onSelected } = props
  const [starHovered, setStarHoverd] = useState(0)
  const [starSelected, setStarSelected] = useState(0)
  const [isSelectedMode, setIsSelectedMode] = useState(false)

  const onEnter = (starOrder: number) => {
    setStarHoverd(starOrder)
  }

  const onLeav = () => {
    setStarHoverd(0)
  }

  const onClickHandler = (starOrder: number) => {
    setIsSelectedMode((state) => {
      if (state) {
        setStarSelected(0)
      } else {
        onSelected?.(starOrder)
      }
      return !state
    })
    setStarSelected(starOrder)
  }

  const clsStarLine = classNames(cls.starLine, [className], {})
  const clsStar = classNames(cls.star, [], {
    [cls.star_selected]: isSelectedMode,
  })

  const stars = arrayLenGen(starCount)
  return (
    <div className={clsStarLine}>
      <div className={cls.inner}>
        {stars.map((star) => (
          <Star
            key={star}
            className={clsStar}
            onMouseEnter={() => onEnter(star)}
            onMouseLeave={onLeav}
            isSelected={starSelected >= star}
            isHovered={starHovered >= star}
            onClick={() => onClickHandler(star)}
            size={size}
          />
        ))}
      </div>
    </div>
  )
})
