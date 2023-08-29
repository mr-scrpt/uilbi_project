import { memo } from 'react'
import { Avatar } from 'shared/component/Avatar'
import { Input } from 'shared/component/Input'
import { Loader } from 'shared/component/Loader'
import { classNames } from 'shared/lib/classNames'

import { ProfileCardProps } from '../../type/props.type'
import cls from './ProfileCard.module.scss'

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    profile,
    isLoading,
    error,
    isEditable,
    onChangeFirstName,
  } = props

  const clsProfile = classNames(cls.profile, [className], {})

  return (
    <div className={clsProfile}>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}

      {!isLoading && !error && (
        <>
          {profile?.avatar && (
            <Avatar
              className={cls.avatar}
              source={profile.avatar}
              title={profile?.lastname || ''}
            />
          )}
          <Input
            value={profile?.firstname}
            name="firstname"
            readOnly={!isEditable}
            disabled={!isEditable}
            onChange={onChangeFirstName}
          />
          {/* <Input value={profile?.lastname} name="lastname" /> */}
          {/* <Input value={profile?.currency} name="currency" /> */}
          {/* <Input value={profile?.city} name="city" /> */}
          {/* <Input value={profile?.avatar} name="avatar" /> */}
          {/* <Input value={profile?.role} name="role" /> */}
        </>
      )}
    </div>
  )
})
