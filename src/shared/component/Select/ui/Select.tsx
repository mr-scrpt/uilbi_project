import { Listbox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames'

import { SelectListDerectionEnum } from '../type/direction.enum'
import { SelectProps } from '../type/props.type'
import cls from './Select.module.scss'
import { SelectItem } from './SelectItem'

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, list, value, onChange, disabled, direction } = props

  const clsCSelect = classNames(cls.select, [className], {
    [cls.select_disabled]: disabled,
  })

  const clsControl = classNames(cls.control, [], {
    [cls.control_disabled]: disabled,
  })

  const clsList = classNames(cls.list, [], {
    [cls.list_reverse]: direction === SelectListDerectionEnum.REVERS,
  })

  return (
    <div className={clsCSelect}>
      <div className={cls.inner}>
        <Listbox
          value={value}
          onChange={(value) => onChange?.(value as T)}
          disabled={disabled}
        >
          <Listbox.Button className={clsControl}>{value}</Listbox.Button>
          <Listbox.Options className={clsList}>
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
    </div>
  )
}
