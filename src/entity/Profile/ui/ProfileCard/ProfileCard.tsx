import { FC } from 'react'
import { Input, InputStateEnum } from 'shared/component/Input'
import { Loader } from 'shared/component/Loader'
import { classNames } from 'shared/lib/classNames'

import { ProfileCardProps } from '../../type/props.type'
import cls from './ProfileCard.module.scss'

export const ProfileCard: FC<ProfileCardProps> = (props) => {
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
          <Input
            value={profile?.firstname}
            name="firstname"
            readOnly={!isEditable}
            state={isEditable ? InputStateEnum.NORMAL : InputStateEnum.DISABLED}
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
}
