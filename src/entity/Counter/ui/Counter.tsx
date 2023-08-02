import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/component/Button'

import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue'
import { counterAction } from '../model/slice/counterSlice'
import cls from './Counter.module.scss'

export const Counter: FC = () => {
  const count = useSelector(getCounterValue)

  const dispatch = useDispatch()
  const increment = () => dispatch(counterAction.increment())
  const decrement = () => dispatch(counterAction.decrement())

  const { t } = useTranslation()

  return (
    <div>
      <h1 className={cls.title}>{count}</h1>
      <div>
        <Button
          aria-label="Increment value"
          onClick={increment}
          className={cls.increment}
        >
          {t('increment')}
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={decrement}
          className={cls.decrement}
        >
          {t('decrement')}
        </Button>
      </div>
    </div>
  )
}
