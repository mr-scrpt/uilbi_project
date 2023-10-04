import { tagsReducer } from 'entity/Tags/model/slice/tagsSlice'
import { memo } from 'react'
import { TabList } from 'shared/component/TabList'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'

import { FeedTagsProps } from '../type/props.type'
import cls from './FeedTags.module.scss'

const reducersList: ReducerList = {
  tags: tagsReducer,
}

export const FeedTags = memo((props: FeedTagsProps) => {
  const { className, tagList, onChangeTag, active } = props

  const clsFeedTags = classNames(cls.feedTags, [className], {})
  return (
    <DynamicModuleLoader reducerList={reducersList}>
      <div className={clsFeedTags}>
        {tagList && (
          <TabList
            tabsList={tagList}
            onTabClick={onChangeTag}
            active={active}
          />
        )}
      </div>
    </DynamicModuleLoader>
  )
})
