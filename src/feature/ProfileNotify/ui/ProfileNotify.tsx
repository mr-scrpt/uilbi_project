import { NotificationList } from 'entity/Notification'
import { memo } from 'react'
import { Button, ButtonSizeEnum, ButtonViewEnum } from 'shared/component/Button'
import { IconEnum } from 'shared/component/Icon'
import { Popover } from 'shared/component/Popover'
import { PopoverPositionEnum } from 'shared/component/Popover/type/position.enum'
import { classNames } from 'shared/lib/classNames'

import { useNotification } from '../api/notificationApi'
import { ProfileNotifyProps } from '../type/props.type'
import cls from './ProfileNotify.module.scss'

export const ProfileNotify = memo((props: ProfileNotifyProps) => {
  const { className } = props

  const clsProfileNotify = classNames(cls.profileNotify, [className], {})
  const { data, isError, isLoading } = useNotification(null, {
    pollingInterval: 5000,
  })
  return (
    <div className={clsProfileNotify}>
      <div className={cls.inner}>
        <Popover
          position={PopoverPositionEnum.TO_LEFT_BOTTOM}
          control={
            <Button
              icon={IconEnum.NOTIFY}
              size={ButtonSizeEnum.S}
              view={ButtonViewEnum.TRANSPARENT}
            />
          }
        >
          {data && (
            <NotificationList
              data={data}
              isLoading={isLoading}
              isError={isError}
            />
          )}
        </Popover>
      </div>
    </div>
  )
})
