import { Menu } from '@headlessui/react'
import { Fragment, HTMLAttributes, ReactNode } from 'react'
import { Button } from 'shared/component/Button'
import { LinkApp } from 'shared/component/LinkApp'
import { classNames } from 'shared/lib/classNames/classNames'

import { IDropDownItem } from '../type/item.type'
import { DropDownProps } from '../type/props.type'
import cls from './DropDown.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  list: IDropDownItem[]
  trigger?: ReactNode
}

// const mapDirectionClass: Record<DropdownDirection, string> = {
//     'bottom left': cls.optionsBottomLeft,
//     'bottom right': cls.optionsBottomRight,
//     'top right': cls.optionsTopRight,
//     'top left': cls.optionsTopLeft,
// };

export const DropDownTest = (props: DropDownProps) => {
  const { className, list, children } = props

  // const menuClasses = [mapDirectionClass[direction]];
  const clsDropDown = classNames(cls.dropDown, [className], {})

  return (
    <div className={clsDropDown}>
      <Menu>
        <Menu.Button as={Fragment}>{children}</Menu.Button>
        <Menu.Items>
          {list.map((item) => {
            const content = ({ active }: { active: boolean }) => (
              <Button>{item.id}</Button>
            )

            // if (item.href) {
            //   return (
            //     <Menu.Item as={LinkApp} to={item.href} disabled={item.disabled}>
            //       {content}
            //     </Menu.Item>
            //   )
            // }

            return (
              <Menu.Item as={Fragment} key={item.id}>
                {content}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Menu>
    </div>
  )
}
