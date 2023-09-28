import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/component/Select'
import { classNames } from 'shared/lib/classNames'

import { feedOrderDirectionData } from '../data/direction.data'
import { FeedOrderDirectionProps } from '../type/props.type'
import cls from './FeedOrderDirection.module.scss'

export const FeedOrderDirection = memo((props: FeedOrderDirectionProps) => {
  const { className, onChangeOrder, order } = props

  const { t } = useTranslation()

  const clsFeedOrderDirection = classNames(
    cls.feedOrderDirection,
    [className],
    {}
  )
  return (
    <div className={clsFeedOrderDirection}>
      <div className={cls.inner}>
        <div className="text">{t('sort-field')}</div>

        <Select
          options={feedOrderDirectionData}
          onChange={onChangeOrder}
          value={order}
        />
      </div>
    </div>
  )
})
