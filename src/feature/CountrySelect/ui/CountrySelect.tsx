import { fetchCountryData, selector } from 'entity/Country'
import { FC, memo, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from 'shared/component/Loader'
import { Select } from 'shared/component/Select'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { CountrySelectProps } from '../type/props.type'
import cls from './CountrySelect.module.scss'

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, disabled, onChange, countryCurrent } = props

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCountryData())
  }, [dispatch])

  const { data, isLoading, error } = useSelector(selector.getCountryData)
  const optionsList = useMemo(() => {
    if (data) {
      return data.map((country) => ({
        content: country.name,
        value: country.abb,
        selected: countryCurrent === country.abb,
      }))
    }
    return []
  }, [data, countryCurrent])

  const clsCountrySelect = classNames(cls.countrySelect, [className], {})
  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <Select
          options={optionsList}
          onChange={onChange}
          className={clsCountrySelect}
          disabled={disabled}
        />
      )}
    </>
  )
})
