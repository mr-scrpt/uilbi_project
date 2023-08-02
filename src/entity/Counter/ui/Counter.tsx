import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/component/Button'

import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue'
import { counterAction } from '../model/slice/counterSlice'

export const Counter: FC = () => {
  const count = useSelector(getCounterValue)

  const dispatch = useDispatch()
  const increment = () => dispatch(counterAction.increment())
  const decrement = () => dispatch(counterAction.decrement())

  const { t } = useTranslation()

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <Button aria-label="Increment value" onClick={increment}>
          {t('increment')}
        </Button>
        <Button aria-label="Decrement value" onClick={decrement}>
          {t('decrement')}
        </Button>
      </div>
    </div>
  )
}
