import { CountrySelect } from 'feature/CountrySelect/ui/CountrySelect'
import { CurrencySelect } from 'feature/CurrencySelect/ui/CurrencySelect'
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
    onChangeCountry,
    onChangeCurrency,
    errorFirstName,
  } = props

  const clsProfile = classNames(cls.profile, [className], {})
  console.log('error in card', errorFirstName)

  return (
    <div className={clsProfile}>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}

      {!isLoading && !error && profile && (
        <>
          {profile?.avatar && (
            <Avatar
              className={cls.avatar}
              source={profile.avatar}
              title={profile.lastname || ''}
            />
          )}
          <Input
            value={profile?.firstname}
            name="firstname"
            readOnly={!isEditable}
            disabled={!isEditable}
            onChange={onChangeFirstName}
          />
          {errorFirstName && errorFirstName.map((item) => <div>{item}</div>)}
          {/* <Select onChange={onChangeCountry} options={countryOptionList} /> */}
          <CountrySelect
            disabled={!isEditable}
            onChange={onChangeCountry}
            value={profile.country || ''}
          />
          <CurrencySelect
            disabled={!isEditable}
            onChange={onChangeCurrency}
            value={profile.currency || ''}
          />
        </>
      )}
    </div>
  )
})
