import { memo } from 'react'
import { Input } from 'shared/component/Input'
import { classNames } from 'shared/lib/classNames'

import { FeedSearchProps } from '../type/props.type'
import cls from './FeedSearch.module.scss'

export const FeedSearch = memo((props: FeedSearchProps) => {
  const { className, onChangeSearch, search } = props

  const clsFeedSearch = classNames(cls.feedSearch, [className], {})
  return (
    <div className={clsFeedSearch}>
      <Input value={search} onChange={onChangeSearch} />
    </div>
  )
})
