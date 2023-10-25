import { Popover as PopoverUi } from '@headlessui/react'
import { Fragment, memo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { PopoverPositionEnum } from '../type/position.enum'
import { PopoverProps } from '../type/props.type'
import cls from './Popover.module.scss'

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    children,
    control,
    position = PopoverPositionEnum.TO_RIGHT_TOP,
  } = props

  const clsPopover = classNames(cls.popover, [className], {})
  const clsList = classNames(cls.list, [], {
    [cls.left_bottom]: position === PopoverPositionEnum.TO_LEFT_BOTTOM,
    [cls.left_top]: position === PopoverPositionEnum.TO_LEFT_TOP,
    [cls.right_bottom]: position === PopoverPositionEnum.TO_RIGHT_BOTTOM,
    [cls.right_top]: position === PopoverPositionEnum.TO_RIGHT_TOP,
  })
  return (
    <PopoverUi className={clsPopover}>
      <PopoverUi.Button as={Fragment}>{control}</PopoverUi.Button>

      <PopoverUi.Panel className={clsList}>
        {children}

        <img src="/solutions.jpg" alt="" />
      </PopoverUi.Panel>
    </PopoverUi>
  )
})
