import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/component/Select'
import { classNames } from 'shared/lib/classNames'

import { feedSortData } from '../data/sort.data'
import { FeedSortProps } from '../type/props.type'
import cls from './FeedSort.module.scss'

export const FeedSort = memo((props: FeedSortProps) => {
  const { className, onChangeSort, sort } = props
  const { t } = useTranslation()

  const clsFeedSort = classNames(cls.feedSort, [className], {})
  return (
    <div className={clsFeedSort}>
      <div className={cls.inner}>
        <div className="text">{t('sort-field')}</div>
        {/* <Select options={feedSortData} value={sort} onChange={onChangeSort} /> */}
      </div>
    </div>
  )
})
