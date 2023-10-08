import { fetchCountryData, selector } from 'entity/Country'
import { memo, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from 'shared/component/Loader'
import { Select } from 'shared/component/Select'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { CountrySelectProps } from '../type/props.type'
import cls from './CountrySelect.module.scss'

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, disabled, onChange, value } = props

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCountryData())
  }, [dispatch])

  const { data, isLoading, error } = useSelector(selector.getCountryData)
  const optionsList = useMemo(() => {
    if (data) {
      return data.map((country) => ({
        value: country.abb,
        content: country.name,
        disabled: false,
      }))
    }
    return []
  }, [data])

  const clsCountrySelect = classNames(cls.countrySelect, [className], {})
  // const list = [
  //   { value: 'test value 1', content: 'content 1', disabled: false },
  //   { value: 'test value 2', content: 'content 2', disabled: false },
  //   { value: 'test value 3', content: 'content 1', disabled: true },
  // ]
  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <Select
          className={clsCountrySelect}
          list={optionsList}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </>
  )
})
