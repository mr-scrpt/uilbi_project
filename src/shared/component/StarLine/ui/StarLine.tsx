import { Star } from '@/shared/component/Star'
import { arrayLenGen } from '@/shared/lib/arrayLenGen/arrayLenGen'
import { classNames } from '@/shared/lib/classNames'
import { memo, useState } from 'react'

import { StarLineProps } from '../type/props.type'
import { StarSizeEnum } from '../type/size.enum'
import cls from './StarLine.module.scss'

export const StarLine = memo((props: StarLineProps) => {
  const { className, starCount = 5, size = StarSizeEnum.L, onSelected } = props
  const [currentStarsSelected, setCurrentStarsSelected] = useState(0)
  const [isValueSelected, setIsValueSelected] = useState(false)

  const onHover = (starsCount: number) => () => {
    if (!isValueSelected) {
      setCurrentStarsSelected(starsCount)
    }
  }

  const onClickHandler = (starsCount: number) => {
    setIsValueSelected((state) => !state)
    console.log('is Selecetd', isValueSelected)
    setCurrentStarsSelected(starsCount)
    if (!isValueSelected) {
      onSelected?.(currentStarsSelected)
    }
  }

  const clsStarLine = classNames(cls.starLine, [className], {})
  const clsStar = classNames(cls.star, [], {
    [cls.star_selected]: isValueSelected,
  })

  const stars = arrayLenGen(starCount)
  return (
    <div className={clsStarLine}>
      <div className={cls.inner}>
        {stars.map((star, idx) => (
          <Star
            key={star}
            className={clsStar}
            onMouseEnter={onHover(star)}
            isSelected={currentStarsSelected >= star}
            onClick={() => onClickHandler(star)}
            size={size}
          />
        ))}
      </div>
    </div>
  )
})
