import { memo } from 'react'
import { Tab } from '@/shared/component/Tab/ui/Tab'
import { classNames } from '@/shared/lib/classNames'

import { TabListProps } from '../type/props.type'
import cls from './TabList.module.scss'

export const TabList = memo((props: TabListProps) => {
  const { className, tabsList, onTabClick, active } = props

  const clsTabList = classNames(cls.tabList, [className], {})
  return (
    <div className={clsTabList}>
      <div className={cls.inner}>
        {tabsList.map((item) => (
          <Tab
            key={item.value}
            value={item.value}
            name={item.name}
            onTabClick={onTabClick}
            className={cls.item}
            active={item.value === active}
          />
        ))}
      </div>
    </div>
  )
})
