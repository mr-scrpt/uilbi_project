import { Listbox } from '@headlessui/react'
import { Fragment } from 'react'
import { classNames } from '@/shared/lib/classNames'

import { SelectItemProps } from '../type/props.type'
import cls from './SelectItem.module.scss'

export const SelectItem = <T extends string>(props: SelectItemProps<T>) => {
  const { className, disabled, children, value } = props
  return (
    <Listbox.Option value={value} as={Fragment}>
      {({ active, selected }) => {
        const clsItem = classNames(cls.item, [className], {
          [cls.item_disabled]: disabled,
          [cls.item_active]: active && !disabled,
          [cls.item_selected]: selected,
        })
        return <li className={clsItem}>{children}</li>
      }}
    </Listbox.Option>
  )
}
