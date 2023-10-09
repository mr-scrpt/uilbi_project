import { Listbox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames'

import { SelectProps } from '../type/props.type'
import cls from './Select.module.scss'
import { SelectItem } from './SelectItem'

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, list, value, onChange, disabled } = props

  const clsCSelect = classNames(cls.select, [className], {
    [cls.select_disabled]: disabled,
  })

  const clsControl = classNames(cls.control, [], {
    [cls.control_disabled]: disabled,
  })

  return (
    <div className={clsCSelect}>
      <Listbox
        value={value}
        onChange={(value) => onChange?.(value as T)}
        disabled={disabled}
      >
        <Listbox.Button className={clsControl}>{value}</Listbox.Button>
        <Listbox.Options className={cls.list}>
          {list.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.value}
            </SelectItem>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
