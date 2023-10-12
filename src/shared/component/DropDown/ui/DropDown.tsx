import { Menu } from '@headlessui/react'
import { Fragment, memo } from 'react'
import { Button } from 'shared/component/Button'
import { LinkApp } from 'shared/component/LinkApp'
import { classNames } from 'shared/lib/classNames'

import { DropDownProps } from '../type/props.type'
import cls from './DropDown.module.scss'

export const DropDown = memo((props: DropDownProps) => {
  const { className, list, children } = props

  const clsDropDown = classNames(cls.dropDown, [className], {})
  const clsItem = classNames(cls.item, [], {})
  return (
    <div className={clsDropDown}>
      <div className={cls.inner}>
        <Menu>
          <Menu.Button as={Fragment}>{children}</Menu.Button>
          <Menu.Items className={cls.list}>
            {list.map((item) => {
              if (item.href) {
                return (
                  <Menu.Item
                    as={LinkApp}
                    to={item.href}
                    key={item.id}
                    className={clsItem}
                  >
                    {item.title}
                  </Menu.Item>
                )
              }
              if (item.onClick) {
                return (
                  <Menu.Item as={Fragment} key={item.id}>
                    {() => (
                      <Button onClick={item.onClick} className={clsItem}>
                        {item.title}
                      </Button>
                    )}
                  </Menu.Item>
                )
              }
              if (item.Component) {
                return (
                  <Menu.Item as="div" key={item.id} className={clsItem}>
                    {item.Component}
                  </Menu.Item>
                )
              }
              return null
            })}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  )
})
