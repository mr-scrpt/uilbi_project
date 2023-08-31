import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  selector as selectorProfile,
  updateProfileData,
} from 'entity/Profile'
import { EditorBar } from 'feature/EditorBar'
import { selector as selectorProfileEditor } from 'feature/ProfileEditor'
import {
  profileEditorAction,
  profileEditorReducer,
} from 'feature/ProfileEditor/model/slice/profileEditorSlice'
import { ChangeEvent, FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from 'shared/component/Button'
import { Loader } from 'shared/component/Loader'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { ProfileEditorProps } from '../type/props.type'
import cls from './ProfileEditor.module.scss'

export const ProfileEditor: FC<ProfileEditorProps> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { setUserData, setEditable } = profileEditorAction
  const { t } = useTranslation('profile_editor')

  const profile = useSelector(selectorProfile.getProfileData)
  const isLoading = useSelector(selectorProfile.getProfileLoading)
  const error = useSelector(selectorProfile.getProfileError)

  const profileToEdit = useSelector(selectorProfileEditor.getProfileEditorData)
  const profileIsEditable = useSelector(
    selectorProfileEditor.getProfileEditorEditable
  )

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const componentReducerList: ReducerList = {
    profile: profileReducer,
    profileEditor: profileEditorReducer,
  }

  const clsProfileEditor = classNames(cls.profileEditor, [className], {})

  const buttonEditHandler = useCallback(() => {
    if (profile) {
      dispatch(setEditable(true))
      dispatch(setUserData(profile))
    }
  }, [dispatch, setEditable, setUserData, profile])

  const buttonSaveHandler = useCallback(() => {
    if (profileToEdit) {
      dispatch(updateProfileData(profileToEdit))
      dispatch(setEditable(false))
    }
  }, [profileToEdit, dispatch, setEditable])

  const buttonResetHandler = useCallback(() => {
    if (profile) {
      dispatch(setUserData(profile))
      dispatch(setEditable(false))
    }
  }, [profile, dispatch, setEditable, setUserData])

  const onChangeFirstName = useCallback(
    (value: string) => {
      if (profileToEdit) {
        dispatch(setUserData({ ...profileToEdit, firstname: value }))
      }
    },
    [dispatch, setUserData, profileToEdit]
  )

  const onChangeCountry = useCallback(
    (value: string) => {
      console.log('change select', value)
      if (profileToEdit) {
        dispatch(setUserData({ ...profileToEdit, country: value }))
      }
    },
    [dispatch, setUserData, profileToEdit]
  )

  const profileData = profileIsEditable ? profileToEdit : profile

  return (
    <DynamicModuleLoader reducerList={componentReducerList} removeAfterUnmount>
      <>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {!isLoading && !error && (
          <>
            <Button onClick={buttonEditHandler} disabled={profileIsEditable}>
              {t('profile-edit-button')}
            </Button>
            <ProfileCard
              className={clsProfileEditor}
              profile={profileData}
              error={error}
              isLoading={isLoading}
              isEditable={profileIsEditable}
              onChangeFirstName={onChangeFirstName}
              onChangeCountry={onChangeCountry}
            />
            {profileIsEditable && (
              <EditorBar save={buttonSaveHandler} reset={buttonResetHandler} />
            )}
          </>
        )}
      </>
    </DynamicModuleLoader>
  )
}
