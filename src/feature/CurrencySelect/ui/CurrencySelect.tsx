import { fetchCurrencyData, selector } from '@/entity/Currency'
import { memo, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '@/shared/component/Loader'
import { Select } from '@/shared/component/Select'
import { SelectListDerectionEnum } from '@/shared/component/Select/type/direction.enum'
import { classNames } from '@/shared/lib/classNames'
import { useAppDispatch } from '@/shared/lib/component/useAppDispatch'

import { CurrencySelectProps } from '../type/props.type'
import cls from './CurrencySelect.module.scss'

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, disabled, onChange, value } = props

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrencyData())
  }, [dispatch])

  const { data, isLoading, error } = useSelector(selector.getCurrencyData)
  const optionsList = useMemo(() => {
    if (data) {
      return data.map((country) => ({
        content: country.name,
        value: country.abb,
        disabled: false,
      }))
    }
    return []
  }, [data])

  const clsCountrySelect = classNames(cls.countrySelect, [className], {})
  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <Select
          list={optionsList}
          onChange={onChange}
          className={clsCountrySelect}
          disabled={disabled}
          value={value}
          direction={SelectListDerectionEnum.REVERS}
        />
      )}
    </>
  )
})
