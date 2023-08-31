import { ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames'

import { SelectProps } from '../type/props.type'
import cls from './Select.module.scss'

export const Select = memo((props: SelectProps) => {
  const { className, options, value, onChange, disabled } = props

  const clsSelect = classNames(cls.select, [className], {})

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option
          className={cls.option}
          value={opt.value}
          key={opt.value}
          selected={opt.selected}
        >
          {opt.content}
        </option>
      )),
    [options]
  )

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <select
      className={clsSelect}
      value={value}
      onChange={onChangeHandler}
      disabled={disabled}
    >
      {optionsList}
    </select>
  )
})
